const guitar = require('./src/guitar')
const fretShift = require('./src/fretShift')
//const Chord = require('./src/Chord')
const lilypond = require('./src/lilypond')
const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const { getReachableFrets,
        getReachableFingerPositions,
        singleFingerMoves} = require('./src/move')
const allHandMoves = require('./src/allHandMoves')

let lines = []


let shape = guitar.randomHandPosition()
shape.openStrings = [0,1,2,3,4,5]

/*lines.push(
  lilypond.handPosition(shape) + '1' + '^' + shape.lilypondFretDiagram(),
  '\\bar "||" \\break'
)*/

let position = shape
for(let i=0; i<100; i++) {
  position = allHandMoves.random(position)
  //position.openStrings = [0,1,2,3,4,5]
  if(!position.empty &&position.lowestFret <= 0) {
    console.log(position, position.lowestFret)
    throw "Waah"
  }
  let lily = lilypond.handPosition(position) + '1'
  lily += '^' + position.lilypondFretDiagram()
/*  let chord = Chord.fromOctaveProfile(guitar.getPitchClassSet(position))
  if(chord != '?')
    lily += ' _"(' + chord.print+')"'*/

  lines.push(lily, '\\bar "||"')
}

lines = [
  "\\version \"2.18.2\"",
  "\\new Voice {",
//  "\\override TextScript.size = #'1.2",
  "\\override TextScript.fret-diagram-details.finger-code = #'in-dot",
  //"\\override TextScript.fret-diagram-details.dot-color = #'white",
  "\\absolute {",
  "\t\\clef \"treble_8\"",
  lines.join('\n\t'),
  "}}",
]

if(argv.o)
  fs.writeFileSync(argv.o, lines.join('\n'))
else {
  console.log(lines.join('\n'))
  console.log('Please use -o flag to output file')
}