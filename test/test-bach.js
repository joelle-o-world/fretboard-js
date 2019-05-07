const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const arp = require('../src/arp')
const step = require('../src/step')
const walkThroughBach = require('../src/walkThroughBach')

console.clear()



let {positions, chords} = walkThroughBach(
  8,
  undefined,
  step,
  {
    filter: pos => {
      //console.log(pos.numberOfEngagedFingers >= 2)
      return pos.numberOfEngagedFingers >= 2
    }
  }
)

console.log(positions)

let notes = [
  //'\\time 6/8',
]
if(positions) {
  for(let i=0; i<positions.length; i++) {

    let position = positions[i]
    let pitches = position.pitches().map(p => lilypond.pitch(p.p))
    console.log(chords[i], pitches)
    let bar = lilypond.sequence(
      arp(
        position,
        undefined,
        16,
        undefined,
        i * 16
      ), 8)
    bar[0] += ' ^"('+chords[i]+')"'
    bar[0] += ' ^'+position.lilypondFretDiagram(6)
    notes.push(...bar)
    console.log(position, bar)
  }



  let lily = notes.join(' ')
  //let lily = lilypond.sheet(positions)

  fs.writeFileSync('./output/bach.ly', lilypond.wrap(lily))
} else
  console.log("No solution found :(")

console.log(chords)
