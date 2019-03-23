const HandPosition = require('./HandPosition')

function fretShift(handPosition, fretShift=0) {
  let fingers = []
  for(let {fret, string} of handPosition.fingers) {
    if(fret)
      fingers.push({fret: fret+fretShift, string: string})
    else
      fingers.push({fret: null, string: null})
  }

  return new HandPosition({
    fingers: fingers,
    openStrings: handPosition.openStrings.slice(),
  })
}

function randomShift(handPosition, numberOfFrets=12) {
  let width = handPosition.width

  let newPosition = Math.floor(Math.random()*(numberOfFrets-width-1)+1)
  let shift = newPosition-handPosition.lowestFret

  return fretShift(handPosition, shift)
}

function allShift(handPosition, numberOfFrets=12) {
  let {lowestFret, width} = handPosition
  if(!lowestFret)
    console.warn('position is unshiftable')

  let list = []
  for(let fret=1; fret<numberOfFrets-width; fret++)
    list.push(fretShift(handPosition, fret - lowestFret))

  return list
}

module.exports = fretShift
module.exports.random = randomShift
module.exports.all = allShift
