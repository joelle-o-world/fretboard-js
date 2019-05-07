const Chord = require('../lib/Chord')
const {standardEADGBE} = require('./tunings')


function includeReleventOpenStrings(chord, position, tuning=standardEADGBE) {
  if(chord.constructor == String)
    chord = new Chord(chord)

  let byString = position.fretsByString()
  let openStrings = []
  for(let string=0; string<byString.length; string++)
    if(!byString[string] && chord.checkPitch(tuning[string])) {
      openStrings.push(string)
    }

  let copy = position.duplicate()
  copy.openStrings = openStrings
  return copy
}
module.exports = includeReleventOpenStrings
