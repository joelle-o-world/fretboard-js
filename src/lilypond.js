const pitch = require('./pitch')
const {standardEADGBE} = require('./tunings')
const {getChord} = require('./chord')
const romanNumeral = require('roman-numerals').toRoman

const pitchclasses_flat = [
  'c', 'des', 'd', 'ees', 'e', 'f', 'ges', 'g', 'aes', 'a', 'bes', 'b']

const pitchclasses_sharp = [
  'c', 'cis', 'd', 'dis', 'e', 'f', 'fis', 'g', 'gis', 'a', 'ais', 'b']

function printPitch(midiPitchNumber, accidentalType='flat') {
  let pc = pitch.pc(midiPitchNumber)
  let octave = pitch.octave(midiPitchNumber) - 4

  let letter
  if(accidentalType == 'flat')
    letter = pitchclasses_flat[pc]
  else if(accidentalType == 'sharp')
    letter = pitchclasses_sharp[pc]

  if(octave == 0)
    return letter
  else if(octave > 0)
    return letter + "'".repeat(octave)
  else if(octave < 0)
    return letter + ','.repeat(-octave)
}

function fingeredPitch({p, finger}, noteValue) {
  if(noteValue)
    return printPitch(p) + noteValue.toString() + ' -' + (finger+1)
  else
    return printPitch(p) + ' -' + (finger+1)
}

function printNote(note, noteValue) {
  if(note.constructor == Array)
    return '<' + note.map(n => fingeredPitch(n)).join(' ') + '>' + noteValue
  else
    return fingeredPitch(note, noteValue)
}

function printSequence(sequence, noteValue='8') {
  return sequence.map(note => printNote(note, noteValue))
}

function handPositionToLilypond(
  position,
  tuning=standardEADGBE,
  fingerings=true,
) {
  // get frets and fingers by string
  let byString = position.fretsAndFingersByString(tuning.length)

  // convert frets to pitches
  for(let string=0; string<byString.length; string++)
    if(byString[string])
      byString[string].pitch = tuning[string] + byString[string].fret

  byString = byString.filter(o => o)

  let notes = byString.map(
    ({pitch, fingerNumber}) => {
      let str = printPitch(pitch)
      if(fingerings)
        str += '-' + (fingerNumber!=null ? fingerNumber+1 : '0')
      return str
    }
  )

  if(notes.length)
    return '< ' + notes.join(' ') + ' >'
  else
    return 'r'
}


function lilypondChordSheet(positions, tuning=standardEADGBE) {
  // Generate lilypond source code for a chord sheet of a given set of positions
  let lines = []
  for(let position of positions) {
    let lily = handPositionToLilypond(position, tuning) + '1' // chord as minim
    lily += '^' + position.lilypondFretDiagram()
    let chord = getChord(position, tuning)
    if(chord)
      lily += '^"' + chord.print + '"'
    lines.push(lily, '\\bar "||"')
  }

  return wrap(lines.join('\n'))
}

function wrap(...lines) {
  return wrapScore(...lines.map(l => wrapVoice(l)))
}

function wrapScore(...lines) {
  return [
    "\\version \"2.18.2\"",
    "\\score {",
    '<<',
    ...lines,
    '>>',
    "\\layout {}",
    "\\midi {}",
    "}",
  ].join('\n')
}

function wrapVoice(line, {tab=false}={}) {
  if(tab)
    return [
      "\\new TabStaff {",
      "\\override TextScript.size = #'1.5",
      "\\override TextScript.fret-diagram-details.finger-code = #'in-dot",
      "\\absolute {",
      line,
      "}}",
    ].join('\n')
  else
    return [
      "\\new Voice {",
      "\\override TextScript.size = #'1.5",
      "\\override TextScript.fret-diagram-details.finger-code = #'in-dot",
      "\\absolute {",
      "\t\\clef \"treble_8\"",
      line,
      "}}",
    ].join('\n')
}

function chordSheetWithBlanks(positions, tuning=standardEADGBE) {
  // Generate lilypond source code for a chord sheet of a given set of positions
  let lines = []
  let n = 0
  let m = 0
  for(let position of positions) {
    let lily = handPositionToLilypond(position, tuning) + '1' // chord as minim
    //lily += '^' + position.lilypondFretDiagram()
    let chord = getChord(position, tuning)
    if(chord)
      lily += '^"' + chord.print + '"'
    if(++n >= 4) {
      lily += '\n\\break\n'
      n = 0
      if(++m >= 4) {
        lily += '\n\\pageBreak\n'
        m = 0
      }
    }
    lines.push(lily)
  }

  let blankLines = lines.map(()=>'s1')

  return wrap(lines.join('\n'), blankLines.join('\n'))
}

function pabloChordSheet(positions, tuning=standardEADGBE, {
  diagrams=true,
  noteValue=1,
  blankStave=false,
  tab=false,
  strum=false,
}={}) {
  // Generate lilypond source code for a chord sheet of a given set of positions
  let lines = []
  let blankLines = []
  let n = 0
  let m = 0
  let lastPosition = null
  for(let i=0; i<positions.length; i++) {
    let position = positions[i]
    let lily = handPositionToLilypond(position, tuning) + noteValue
    if(tab)
      lily = "\\set TabStaff.minimumFret = #"
        + position.playingPosition + '\n'+lily
    if(strum)
      lily += '\\arpeggio'
    if(diagrams)
      lily += '^' + position.lilypondFretDiagram(tuning.length)
    let playingPosition = position.playingPosition
    if(playingPosition && position.fingers[0].fret)
      if(!lastPosition || lastPosition.playingPosition != playingPosition) {
        lily = '\n\\override TextSpanner.bound-details.left.text = \\markup { \\bold ' + romanNumeral(playingPosition) + ' }\n' + lily
        lily += ' \\startTextSpan'
      }


    if(!positions[i+1]
      || positions[i+1].playingPosition != playingPosition
    ) {
      lily += ' \\stopTextSpan'
    }

    let chord = getChord(position, tuning)
    n += 1/noteValue
    if(n >= 4) {
      lily += '\n\\break\n'
      n = 0
      if(++m >= 4) {
        lily += '\n\\pageBreak\n'
        m = 0
      }
    }
    lines.push(lily)
    blankLines.push('s'+noteValue)

    lastPosition = position
  }

  let staves = [
    wrapVoice(lines.join('\n')),
  ]

  if(tab) {
    staves.push(wrapVoice(lines.join('\n'), {tab:true}))
  }

  if(blankStave) {
    staves.push(
      wrapVoice(blankLines.join('\n'))
    )
  }

  return wrapScore(...staves)
}

module.exports = {
  pitch: printPitch,
  handPosition: handPositionToLilypond,
  sheet: lilypondChordSheet,
  fingeredPitch: fingeredPitch,
  note: printNote,
  sequence: printSequence,
  wrap: wrap,
  sheetWithBlanks: chordSheetWithBlanks,
  pabloSheet: pabloChordSheet,
}
