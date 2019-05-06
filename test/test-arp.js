
const HandPosition = require('../src/HandPosition')
const arpeggiate = require('../src/arpeggiate')
const lilypond = require('../src/lilypond')

let position1 = HandPosition.empty()
position1.fingers = [
  {fret:1, string:3},
  {fret:2, string:1},
  {fret:2, string:2},
]

let sequence1 = arpeggiate(
  position1, undefined,
  32
)

console.log(lilypond.sequence(sequence1, 16))
