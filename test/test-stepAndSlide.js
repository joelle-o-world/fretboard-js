const stepAndSlide = require('../src/stepAndSlide.js')
const randomHandPosition = require('../src/randomFeasibleHandPosition')
const HandPosition = require('../src/HandPosition')

let position1 = HandPosition.empty()
position1.fingers = [
  {fret:1, string:3},
  {fret:2, string:1},
  {fret:2, string:2},
]

console.log('position1:', position1)

let position2s = [...stepAndSlide.all(position1)]
console.log(position2s.length)

let pos2 = stepAndSlide.random(position1)
console.log(pos2)
