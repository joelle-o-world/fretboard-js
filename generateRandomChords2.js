const guitar = require('./src/guitar')
const fretShift = require('./src/fretShift')
//const Chord = require('./src/Chord')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const lilypond = require('./src/lilypond')

let lines = []

const n = 10
for(let i=0; i<n; i++) {
  let shape = guitar.randomHandPosition()
  let allShifts = fretShift.all(shape)
  for(let position of allShifts) {
  //  let position = fretShift.random(shape)
    if(position.lowestFret <= 0) {
      console.log(position)
      throw "Waah"
    }
    let lily = lilypond.handPosition(position) + '1'
    lily += '^' + position.lilypondFretDiagram()
  /*  let chord = Chord.fromOctaveProfile(guitar.getPitchClassSet(position))
    if(chord != '?')
      lily += ' _"(' + chord.print+')"'*/

    lines.push(lily, '\\bar "||"')
  }
  lines.push("\\break")
}

lines = [
  "\\version \"2.18.2\"",
//  "\\override TextScript.fret-diagram-details.finger-code = #'in-dot",
  "\\absolute {",
  "\t\\clef \"treble_8\"",
  lines.join('\n\t'),
  "}"
]

if(argv.o)
  fs.writeFileSync(argv.o, lines.join('\n'))
else {
  console.log(lines.join('\n'))
  console.log('Please use -o flag to output file')
}
