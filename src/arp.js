//const lilyNote = require('./lilypond').fingeredPitch

const modes = [

  n => {
    let list = [0]
    for(let i=n-1; i>0; i--)
      list.push(i)
    return list
  },

  /*n => {
    list = []
    let i=0
    while(i<n) {
      list.push(i)
      if(i%2)
        i--
      else
        i += 2
    }
    return list
  }*/
]

function arpeggiate(
  position,
  tuning,
  length = 8,
  period = undefined,
  offset = 0,
  mode = Math.floor(Math.random()*modes.length)
) {
  let pitches = position.pitches(tuning)
  let pattern = modes[mode](pitches.length)

  for(let i in pattern)
    if(pattern[i].constructor == Array)
      pattern[i] = pattern[i].filter((n ,j) => pattern[i].indexOf(n) == j)

  if(offset)
    pattern = [
      ...pattern.slice(offset%pattern.length, pattern.length),
      ...pattern.slice(0, offset%pattern.length)
    ]

  if(period)
    pattern = pattern.slice(0, period)
  else
    period = pattern.length

  let sequence = []
  for(let i=0; i<length; i++) {
    let pat = pattern[i%period]
    if(pat.constructor == Number)
      sequence[i] = pitches[pat]
    else if(pat.constructor == Array)
      sequences[i] = pat.map(j => pitches[j])
  }

  return sequence
}
module.exports = arpeggiate
