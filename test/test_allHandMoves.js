const HandPosition = require('../src/HandPosition')
const randomHandPosition = require('../src/randomFeasibleHandPosition')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')
const checkFeasible = require('../src/checkFeasible')
const allHandMoves = require('../src/allHandMoves')

let position1 = randomHandPosition()
position1.openStrings = []
console.log('feasible:', checkFeasible(position1))


let moves = allHandMoves(position1)


for(let position2 of moves) {
    console.log(position2)
}
