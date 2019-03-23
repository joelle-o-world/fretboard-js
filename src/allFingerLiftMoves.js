function* allFingerLiftMoves(handPosition) {
  // list all the new hand-positions that can be arrived at from a given position
  // by lifting any number of fingers

  let placedFingerNumbers = handPosition.placedFingerNumbers

  let nPossibilities = Math.pow(2, placedFingerNumbers.length)

  // cycle through all possibilities
  for(let i=0; i<nPossibilities; i++) {
    let c = i // count in binary to decide which fingers to lift in each position
    let copy = handPosition.duplicate()

    for(let fingerNumber of placedFingerNumbers) {
      if(c%2 == 1) // look at current column
        copy = copy.liftFinger(fingerNumber)
      c = (c - (c%2))/2 // bitshift
    }

    yield copy
  }
}
module.exports = allFingerLiftMoves
