const moveToChord = require('./moveToChord')
const randomHandPosition = require('./randomFeasibleHandPosition')
const HandPosition = require('./HandPosition')

function walkThroughChords(
  chords,
  position0 = randomHandPosition(),
  moveType,
  options={},
) {
  let sequence = []
  let choicesSequence = []

  let {
    filter = null
  } = options


  let tmp = 1

  for(let i=0; i<chords.length; i++) {
    if(!choicesSequence[i]) {
      let lastPosition = sequence[i-1] || position0
      let choices = moveToChord.list(lastPosition, chords[i], moveType, options)
      choicesSequence[i] = choices
        .map(choice => choice.position)
        .sort(() => Math.random()*2-1)
      if(filter)
        choicesSequence[i] = choicesSequence[i].filter(filter)
    }

    if(choicesSequence[i].length)
      sequence[i] = choicesSequence[i].shift()
    else if(i > 0) {
      choicesSequence[i] = null
      sequence[i] = null
      i -= 2
    } else {
      return null
    }
  }

  return sequence
}
module.exports = walkThroughChords
