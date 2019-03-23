function *cycleCombinations(...arrays) {
  let nPossibilities = 1
  for(let arr of arrays)
    nPossibilities *= arr.length

  for(let i=0; i<nPossibilities; i++) {
    let c = i
    let out = []
    for(let arr of arrays) {
      out.push(arr[c%arr.length])
      c = (c - (c%arr.length))/arr.length
    }
    yield out
  }
}
module.exports.cycle = cycleCombinations

function randomCombination(...arrays) {
  let out = []
  for(let arr of arrays) {
    out.push(arr[Math.floor(Math.random()*arr.length)])
  }
  return out
}
module.exports.random = randomCombination
