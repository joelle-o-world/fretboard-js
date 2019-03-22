const guitar = require('./src/guitar')
//const Chord = require('./src/Chord')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))

let lines = []

const n = 100
for(let i=0; i<n; i++) {
  let shape = guitar.randomHandPosition()
  for(let j=0; j<8; j++) {
    let position = guitar.randomShift(shape)
    let lily = guitar.lilypond(position) + '1'
  /*  let chord = Chord.fromOctaveProfile(guitar.getPitchClassSet(position))
    if(chord != '?')
      lily += ' _"(' + chord.print+')"'*/

    lines.push(lily, '\\bar "||"')
  }
  lines.push("\\break")
}

lines = [
  "\\absolute {",
  "\t\\clef \"treble_8\"",
  lines.join('\n\t'),
  "}"
]

if(argv.o)
  fs.writeFileSync(argv.o, lines.join('\n'))
else {
  console.log(lines.join('\n'))
  console.log('Please use -o flag for output file')
}
