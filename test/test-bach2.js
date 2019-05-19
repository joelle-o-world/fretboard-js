const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const arp = require('../src/arp')
const step = require('../src/step')
const walkThroughBach = require('../src/walkThroughBach')

console.clear()



let {positions, chords} = walkThroughBach(
  256,
  undefined,
  step,
)

let notes = [
  //'\\time 6/8',
]
if(positions) {
  let lily = lilypond.pabloSheet(positions)
  let path = './output/bach2.ly'
  fs.writeFileSync(path, lily)
  console.log('written to', path)
} else
  console.log("No solution found :(")
