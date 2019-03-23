const HandPosition = require('../src/HandPosition')
const {randomHandPosition} = require('../src/guitar')
const allFingerLiftMoves = require('../src/allFingerLiftMoves')
const checkFeasibility = require('../src/checkFeasibility')
const allHandMoves = require('../src/allHandMoves')

let position1 = randomHandPosition()
position1.openStrings = []
console.log('feasible:', checkFeasibility(position1))


let moves = allHandMoves(position1)


for(let position2 of moves) {
    console.log(position2)
}
