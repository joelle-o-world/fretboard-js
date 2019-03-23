const HandPosition = require('../src/HandPosition')
const {randomHandPosition} = require('../src/guitar')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')

let position1 = randomHandPosition()

console.log(position1)

let moves = allFingerLiftMoves(position1)

for(let position2 of moves) {
  if(!position2.empty)
    console.log(position2)
}
