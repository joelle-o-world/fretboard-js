const pitch = require('./pitch')

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

module.exports = {
  printPitch: printPitch,
}
