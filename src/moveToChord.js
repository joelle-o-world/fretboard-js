const step = require('./step')
const slide = require('./slide')
const stepAndSlide = require('./stepAndSlide')
const {getPitchClassSet} = require('./chord')
const comparePitchClassSets = require('./comparePitchClassSets').includes
const Chord = require('../lib/Chord')

const {standardEADGBE} = require('./tunings')

function *allMovesToChord(position1, chords, moveType=step, options={}) {

  if(chords.constructor != Array)
    chords = [chords]
  chordPCSs = chords.map(c => {
    if(c.constructor == String)
      c = new Chord(c)
    return c.octaveProfile
  })

  let {
    tuning = standardEADGBE,
    minPCSSize = 2
  } = options

  for(let position2 of (moveType).all(position1, options)) {
    let positionPCS = getPitchClassSet(position2, tuning)
    for(let i=0; i<chords.length; i++)
      if(
        positionPCS.length >= minPCSSize &&
        comparePitchClassSets(chordPCSs[i], positionPCS)
      )
        yield {
          position: position2,
          chordIndex: i,
          chord: chords[i]
        }
  }
}
module.exports = allMovesToChord

function listMovesToChord(position1, chords, moveType, options) {
  return [...allMovesToChord(position1, chords, moveType, options)]
}
module.exports.list = listMovesToChord

function randomMoveToChord(position1, chords, moveType=step, options={}) {
  let choices = [
    ...allMovesToChord(position1, chords, moveType=step, options={})
  ]
  return choices[Math.floor(Math.random()*choices.length)]
}
module.exports.random = randomMoveToChord
