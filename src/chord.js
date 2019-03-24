const Chord = require('../lib/Chord')

const pitch = require('./pitch')
const standardEADGBE = [40, 45, 50, 55, 59, 64]


function getPitchSet(handPosition, tuning=standardEADGBE) {
  // get a list of midi-pitches given a hand position and a midi-pitch-tuning
  let tab = handPosition.fretsByString()
  let chord = []
  for(let i in tab) {
    if(tab[i] == null || tuning[i] == null)
      continue

    chord.push(tab[i] + tuning[i])
  }

  return chord
}

function getPitchClassSet(handPosition, tuning=standardEADGBE) {
  let chord = getPitchSet(handPosition, tuning)
  let op = []
  for(let p of chord) {
    let pc = pitch.pc(p)
    if(!op.includes(pc))
      op.push(pc)
  }
  return op.sort((A,B) => A-B)
}

function getChord(handPosition, tuning = standardEADGBE) {
  let pitchClassSet = getPitchClassSet(handPosition, tuning)
  return Chord.fromOctaveProfile(pitchClassSet)
}

module.exports = {
  getPitchSet: getPitchSet,
  getPitchClassSet: getPitchClassSet,
  getChord: getChord,
}
