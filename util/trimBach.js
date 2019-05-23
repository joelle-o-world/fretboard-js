const bach = require('../bach.transition-net.json').forward
const Chord = require('../lib/Chord')
const fs = require('fs')

const max_pitches = 4

let newBach = {}
for(let i in bach) {
  let a = new Chord(i)
  if(a.octaveProfile.length > max_pitches)
    continue

  a.bass = null

  let chords = bach[i]
    .map(b => {
      b = new Chord(b)
      b.bass = null
      return b
    })
    .filter(b => b.octaveProfile.length <= max_pitches)
    //.filter((b, i, arr) => arr.indexOf(b) == i)
    .map(b => b.print)

  let aPrunt = a.print
  if(!newBach[aPrunt])
    newBach[aPrunt] = []

  newBach[aPrunt].push(...chords)
  newBach[aPrunt] = newBach[aPrunt].filter((b, j, arr) => arr.indexOf(b) == j)
}

fs.writeFileSync('./dietBach.json', JSON.stringify({
  forward:newBach
}))
console.log('done')
