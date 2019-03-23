function allHandMoves(handPosition) {
  for(let n=0; n<handPosition.fingers; n++) {
    let {fret, string} = finger = handPosition.fingers[n]
    console.log(fret, string)
  }
}
module.exports = allHandMoves
