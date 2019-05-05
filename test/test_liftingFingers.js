const HandPosition = require('../src/HandPosition')
const randomHandPosition = require('../src/randomFeasibleHandPosition')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')
const checkFeasible = require('../src/checkFeasible')

let position1 = randomHandPosition()
console.log('feasible:', checkFeasible(position1))

console.log(position1)

let moves = allFingerLiftMoves(position1)
/*
for(let position2 of moves) {
  if(!position2.empty)
    console.log(position2)
}
*/
