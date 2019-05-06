const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')

console.clear()

let sequence = walkThroughChords(
  ['C', 'Am', "F", "G"],
  undefined,
  undefined,
  {
    filter: pos => {
      return pos.numberOfEngagedFingers >= 2
    }
  }
)

console.log(sequence)

if(sequence) {
  let sheet = lilypond.sheet(sequence)
  console.log(sheet)

  fs.writeFileSync('output/testingWalkThroughChords.ly', sheet)
} else
  console.log("No solution found :(")
