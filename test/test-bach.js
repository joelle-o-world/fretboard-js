const walkThroughChords = require('../src/walkThroughChords')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const arp = require('../src/arp')
const step = require('../src/step')
const walkThroughBach = require('../src/walkThroughBach')

console.clear()



let {positions, chords} = walkThroughBach(
  64,
  undefined,
  step,
)

let notes = [
  //'\\time 6/8',
]
if(positions) {
  for(let i=0; i<positions.length; i++) {

    let position = positions[i]
    let pitches = position.pitches().map(p => lilypond.pitch(p.p))
    let bar = lilypond.sequence(
      arp(
        position,
        undefined,
        16,
        undefined,
        i * 16
      ), 8)
    /*let slurLength = 4
    for(let b=0; b<bar.length; b+=slurLength) {
      bar[b] += '\\('
      bar[b+slurLength-1] += '\\)'
    }*/
    //for(let b in bar)
    //  bar[b] += '\\laissezVibrer'
    bar[0] += ' _"('+chords[i]+')"'
    bar[0] += ' ^'+position.lilypondFretDiagram(6)
    notes.push(...bar)
  }



  let lily = notes.join(' ')
  //let lily = lilypond.sheet(positions)
  let path = './output/bach.ly'
  fs.writeFileSync(path, lilypond.wrap(lily))
  console.log('written to', path)
} else
  console.log("No solution found :(")
