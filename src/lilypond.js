const pitch = require('./pitch')
const standardEADGBE = [40, 45, 50, 55, 59, 64]

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
  let byString = position.fretsAndFingersByString().filter(o => o)

  // convert frets to pitches
  for(let string=0; string<byString.length; string++)
    byString[string].pitch = tuning[string] + byString[string].fret

  let notes = byString.map(
    ({pitch, fingerNumber}) => printPitch(pitch) + '-' +
                                (fingerNumber!=null ? fingerNumber+1 : '0')
  )

  if(notes.length)
    return '< ' + notes.join(' ') + ' >'
  else
    return 'r'
}

module.exports = {
  pitch: printPitch,
  handPosition: handPositionToLilypond,
}
