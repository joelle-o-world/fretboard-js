const guitar = require('../src/guitar.js')
const {getReachableFrets, getReachableFingerPositions} = require('../src/getMoves')

let position1 = guitar.randomHandPosition()
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
  let position = {
    fingers:[ {fret: null, string:null},{fret: null, string:null},
              {fret: null, string:null},{fret: null, string:null}],
    openStrings: []
  }

  for(let finger=0; finger<4; finger++) {
    let options = getReachableFingerPositions(position, finger)
    let choice = options[Math.floor(Math.random()*options.length)]
    position.fingers[finger] = choice
  }

  return position
}

let chord = buildChord()
console.log(chord)
