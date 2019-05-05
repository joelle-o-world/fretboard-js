const HandPosition = require("./src/HandPosition")
const allHandMoves = require('./src/allHandMoves')
const lilypond = require("./src/lilypond")
const fs = require('fs')
const lilynode = require('lilynode')
console.log(lilynode)

let iterator = allHandMoves(HandPosition.empty())
let positions = []

let volume = 1
for(let position of iterator) {
  if(position.lowestFret == 1)
    positions.push(position)

  if(positions.length >= 1000) {
    let sheet = lilypond.sheet(positions)
    let name = 'Volume ' + volume
    let filepath = './all_handpositions/'+name+'.ly'
    fs.writeFileSync(filepath, sheet)
    volume++
    positions = []
    console.log('saving', name)
  }
}
