const moveToChord = require('./moveToChord')
const randomHandPosition = require('./randomFeasibleHandPosition')
const HandPosition = require('./HandPosition')
const stepAndSlide = require('./stepAndSlide')
const includeReleventOpenStrings = require('./includeReleventOpenStrings')
const bach = require('../bach.transition-net.json')

function walkThroughBach(
  n,
  position0 = randomHandPosition(),
  moveType = stepAndSlide,
  options={},
) {
  let positions = []
  let choicesSequence = []
  let chords = []

  let {
    filter = null,
    tuning
  } = options


  let tmp = 1

  for(let i=0; i<n; i++) {
    if(!choicesSequence[i]) {
      let lastChord = chords[i-1] || null
      if(lastChord)
        chordChoices = bach.forward[lastChord]
      if(!lastChord || !chordChoices)
        chordChoices = bach.all

      let lastPosition = positions[i-1] || position0
      let choices = moveToChord.list(
        lastPosition, chordChoices, moveType, options
      )
      choicesSequence[i] = choices
        //.map(choice => choice.position)
        .sort(() => Math.random()*2-1)
      if(filter)
        choicesSequence[i] = choicesSequence[i].filter(
          o => filter(o.position)
        )
    }

    if(choicesSequence[i].length) {
      let o = choicesSequence[i].shift()
      positions[i] = o.position
      chords[i] = o.chord
    } else if(i > 0) {
      choicesSequence[i] = null
      positions[i] = null
      chords[i] = null
      i -= 2
    } else {
      return null
    }
  }

  for(let i in positions) {
    positions[i] = includeReleventOpenStrings(
      chords[i], positions[i]
    )
  }

  return {
    positions: positions,
    chords:chords
  }
}
module.exports = walkThroughBach
