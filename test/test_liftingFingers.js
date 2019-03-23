const HandPosition = require('../src/HandPosition')
const {randomHandPosition} = require('../src/guitar')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')
const checkFeasibility = require('../src/checkFeasibility')

let position1 = randomHandPosition()
console.log('feasible:', checkFeasibility(position1))

console.log(position1)

let moves = allFingerLiftMoves(position1)
/*
for(let position2 of moves) {
  if(!position2.empty)
    console.log(position2)
}
*/
