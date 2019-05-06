const HandPosition = require('../src/HandPosition')
const {compareToChord} = require('../src/chord.js')

let position1 = HandPosition.empty()
position1.fingers = [
  {fret:1, string:3},
  {fret:2, string:1},
  {fret:2, string:2},
]


let match = compareToChord('D', position1)
console.log(match)
