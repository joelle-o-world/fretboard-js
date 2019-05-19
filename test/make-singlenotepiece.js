const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const arp = require('../src/arp')
const step = require('../src/step')
const HandPosition = require('../src/HandPosition')
const randomHandPosition = require('../src/randomFeasibleHandPosition')

console.clear()

const length = 16 * 8

let position0 = randomHandPosition()

let positions = []
for(let i=0; i<length; i++) {
  let lastPosition = positions[i-1] || position0
  let nextPositions = [...step.all(lastPosition)]
    .filter(pos => pos.numberOfEngagedFingers == 1)
  positions[i] = nextPositions[Math.floor(Math.random()*nextPositions.length)]
}

console.log(positions)

let lily = lilypond.pabloSheet(
  positions,
  undefined,
  {diagrams:false, noteValue:16, tab:true},
)

fs.writeFileSync('./output/single-note-piece.ly', lily)
