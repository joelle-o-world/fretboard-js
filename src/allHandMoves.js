const HandPosition = require('./HandPosition')
const allFingerLiftMoves = require('./allFingerLiftMoves')
const {getMovesForFinger} = require('./move')
const combinations = require('./combinations')
const checkFeasibility = require('./checkFeasibility')


function* allHandMoves(position1, options) {
  let optionsByFinger = []

  let nPossibilities = 1
  for(let n=0; n<position1.fingers.length; n++) {
    optionsByFinger[n] = getMovesForFinger(position1, n, options)
    nPossibilities *= optionsByFinger[n].length
  }

  for(let fingerPositions of combinations.cycle(...optionsByFinger)) {
    let position2 = new HandPosition({fingers: fingerPositions})
    //.duplicate() moved to last step efficiency
    if(checkFeasibility(position2))
      yield position2.duplicate()
  }
}
module.exports = allHandMoves

function randomHandMove(position1, options) {
  let optionsByFinger = []

  let nPossibilities = 1
  for(let n=0; n<position1.fingers.length; n++) {
    optionsByFinger[n] = getMovesForFinger(position1, n, options)
    nPossibilities *= optionsByFinger[n].length
  }

  let position2
  do {
    position2 = new HandPosition({
      fingers:combinations.random(...optionsByFinger)
    })//.duplicate() // < moved to last step efficiency
  } while(!checkFeasibility(position2, options))

  return position2.duplicate()
}
module.exports.random = randomHandMove
