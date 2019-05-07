const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const slide = require('../src/slide')

console.clear()

let sequence = walkThroughChords(
  ['C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",'C', 'Am', "F", "G",],
  undefined,
  slide,
  {
    filter: pos => {
      return pos.numberOfEngagedFingers >= 3
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
