const HandPosition = require('./HandPosition')
const {getHighestFrettedFinger, getLowestFrettedFinger} = require('./range.js')

function singleFingerMoves(handPosition, options) {
  let list = []
  for(let finger=0; finger < handPosition.fingers.length; finger++) {
    let fingerPositions = getReachableFingerPositions(handPosition, finger, options)
    for(let to of fingerPositions)
      list.push(handPosition.moveFinger(finger, to))
  }

  return list
}

module.exports.singleFingerMoves = singleFingerMoves

function getMovesForFinger(handPosition, fingerNumber, options={}) {
  // list the moves a single finger can make
  let finger = handPosition.fingers[fingerNumber]
  if(handPosition.fingers[fingerNumber].fret == null)
    // a lifted finger may remain lifted, or may be placed in any reachable position
    return [
      {fret: null, string: null},
      ...getReachableFingerPositions(handPosition, fingerNumber, options),
    ]
  else if(handPosition.fingers) {
    // a placed finger may remain where it is or be lifted
    return [
      {fret: finger.fret, string:finger.string},
      {fret: null, string: null},
    ]
  }
}
module.exports.getMovesForFinger = getMovesForFinger

function getReachableFingerPositions(handPosition, fingerNumber, options={}) {
  if(!(handPosition instanceof HandPosition))
    throw 'getReachableFingerPositions expects a HandPosition'

  let frets = getReachableFrets(handPosition, fingerNumber, options)
  let {numberOfStrings = 6} = options

  let list = []
  for(let string=0; string<numberOfStrings; string++) {
    for(let fret of frets)
      list.push({fret: fret, string:string})
  }
  return list
}
module.exports.getReachableFingerPositions = getReachableFingerPositions

function getReachableFrets(
  handPosition,
  n, // finger number
  { numberOfFingers = 4,
    minFingerStretch = 0, // in frets
    maxFingerStretch = 2, // in frets
    maxHandStretch = 3, // in frets
    numberOfStrings = 6,
    numberOfFrets = 12,
    }={}
) {
  // Generator function yielding the fret numbers reachable by a given finger
  // in a given hand position.

  if(!(handPosition instanceof HandPosition))
    throw 'getReachableFrets expects a HandPosition'

  const {fingers} = handPosition

  // get values for adjacent frets
  let leftFinger=null, leftFret=null
  for(let i=n-1; i>=0; i--)
    if(fingers[i].fret != null) {
      leftFret = fingers[i].fret
      leftFinger = i
      break
    }

  // get values for right adjacent fret
  let rightFinger=null, rightFret=null
  for(let i=n+1; i<fingers.length; i++)
    if(fingers[i].fret != null) {
      rightFinger = i
      rightFret = fingers[i].fret
      break
    }


  // compute minimum/maximum frets
  let min = 1
  let max = numberOfFrets

  // reduce range so as not to overstretch or overlap with left finger
  if(leftFret != null) {
    min = Math.max(min, leftFret)
    max = Math.min(max, leftFret + maxFingerStretch * (n-leftFinger))
  }
  // reduce range so as not to overstretch or overlap right finger
  if(rightFret != null) {
    max = Math.min(max, rightFret)
    min = Math.max(min, rightFret - maxFingerStretch * (rightFinger-n))
  }

  // reduce range so as not to overstretch entire hand
  let lowestFinger = getLowestFrettedFinger(handPosition)
  let highestFinger = getHighestFrettedFinger(handPosition)

  if(lowestFinger && lowestFinger != fingers[n])
    // reduce the range against lowest finger
    max = Math.min(max, lowestFinger.fret + maxHandStretch)

  if(highestFinger && highestFinger != fingers[n])
    // reduce the range against the highest finger
    min = Math.max(min, highestFinger.fret - maxHandStretch)


  let frets = []
  for(let fret=min; fret<=max; fret++)
    frets.push(fret)

  return frets
}

module.exports.getReachableFrets = getReachableFrets
