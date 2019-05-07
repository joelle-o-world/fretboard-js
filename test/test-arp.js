const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const arp = require('../src/arp')
const step = require('../src/step')

console.clear()

const chords = ['C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", 'C', 'Am', "F", "G", ]

let sequence = walkThroughChords(
  chords,
  undefined,
  step,
  {
    filter: pos => {
      return pos.numberOfEngagedFingers >= 2
    }
  }
)

console.log(sequence)

let notes = [
  //'\\time 6/8',
]
if(sequence) {
  for(let i in sequence) {

    let position = sequence[i]
    let pitches = position.pitches().map(p => lilypond.pitch(p.p))
    console.log(chords[i], pitches)
    let bar = lilypond.sequence(arp(
      position,
      undefined,
      16,
    ), 8)
    bar[0] += ' ^'+position.lilypondFretDiagram(6)
    notes.push(...bar)
    console.log(position, bar)
  }



  let lily = notes.join(' ')
  //let lily = lilypond.sheet(sequence)

  fs.writeFileSync('./output/arp.ly', lilypond.wrap(lily))
} else
  console.log("No solution found :(")
