const HandPosition = require('../src/HandPosition')
const randomHandPosition = require('../src/randomFeasibleHandPosition')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')
const checkFeasible = require('../src/checkFeasible')
const step = require('../src/step')

let position1 = randomHandPosition()
position1.openStrings = []
console.log('feasible:', checkFeasible(position1))


let moves = step.all(position1)


for(let position2 of moves) {
    console.log(position2)
}
