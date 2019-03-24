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
const HandPosition = require('./src/HandPosition')

let lines = []


let positions = [HandPosition.empty()]

for(let i=1; i<16; i++)
  positions[i] = allHandMoves.random(positions[i-1])


let lySource = lilypond.sheet(positions.slice(1))

if(argv.o)
  fs.writeFileSync(argv.o, lySource)
else {
  console.log(lySource)
  console.log('Please use -o flag to output file')
}
