const randomHandPosition = require('../src/randomFeasibleHandPosition')
const HandPosition = require('../src/HandPosition')
const { getReachableFrets,
        getReachableFingerPositions,
        singleFingerMoves} = require('../src/move')

let position1 = randomHandPosition()
let position0 = {
  fingers:[
    {fret: null, string:null},
    {fret: null, string:null},
    {fret: null, string:null},
    {fret: null, string:null},
  ],
  openStrings: [0,1,2,3,4,5]
}

console.log('starting position:', position1)

/*let fingerNum = 1
console.log('moving finger:', fingerNum)
let fingerPositions = getReachableFingerPositions(position1, fingerNum)
console.log('reachable:', fingerPositions)*/

function buildChord() {
  let position = HandPosition.empty()

  for(let finger=0; finger<4; finger++) {
    let options = getReachableFingerPositions(position, finger)
    let choice = options[Math.floor(Math.random()*options.length)]
    position.fingers[finger] = choice
  }

  return position
}

let chord = buildChord()
console.log(chord)
console.log(chord.lilypondFretDiagram())

let moves = singleFingerMoves(chord)
console.log(moves)
