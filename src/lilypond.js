const pitch = require('./pitch')
const standardEADGBE = [40, 45, 50, 55, 59, 64]
const {getChord} = require('./chord')

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

function handPositionToLilypond(position, tuning=standardEADGBE) {
  // get frets and fingers by string
  let byString = position.fretsAndFingersByString()

  // convert frets to pitches
  for(let string=0; string<byString.length; string++)
    if(byString[string])
      byString[string].pitch = tuning[string] + byString[string].fret

  byString = byString.filter(o => o)

  let notes = byString.map(
    ({pitch, fingerNumber}) => printPitch(pitch) + '-' +
                                (fingerNumber!=null ? fingerNumber+1 : '0')
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

  lines = [
    "\\version \"2.18.2\"",
    "\\score {",
    "\\new Voice {",
    "\\override TextScript.fret-diagram-details.finger-code = #'in-dot",
    "\\absolute {",
    "\t\\clef \"treble_8\"",
    ...lines,
    "}}",
    "\\layout {}",
    "\\midi {}",
    "}",
  ]

  return lines.join('\n')
}

module.exports = {
  pitch: printPitch,
  handPosition: handPositionToLilypond,
  sheet: lilypondChordSheet
}
