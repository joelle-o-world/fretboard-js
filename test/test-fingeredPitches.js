const HandPosition = require('../src/HandPosition')

let position1 = HandPosition.empty()
position1.fingers = [
  {fret:1, string:3},
  {fret:2, string:1},
  {fret:2, string:2},
]
position1.openStrings = [0]

console.log(position1.pitches())
