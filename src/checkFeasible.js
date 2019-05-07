// Check wether a given hand position is feasible

function checkFeasible(position, {
  maxFingerStretch = 2,
  minFingerStretch = 0,
  maxHandStretch = 3,
  forbidStringSharing = true,
}={}) {
  // check overall hand stretch
  let width = position.width
  if(width > maxHandStretch || width < 0)
    return false

  // check adjacent finger stretches
  // check for finger overlaps
  for(let n=1; n<position.fingers.length; n++) {
    let A = position.fingers[n-1].fret
    let B = position.fingers[n].fret
    let stretch = B-A
    if(A == null || B == null)
      continue
    else if(stretch < minFingerStretch || stretch > maxFingerStretch)
      return false
  }

  // check for fingers on the same string
  if(!forbidStringSharing){
    let stringTaken = []
    for(let {string} of position.fingers) {
      if(string == null)
        continue
      else if(stringTaken[string])
        return false
      else
        stringTaken[string] = true
    }
}

  // if we survived this far then it is feasible
  return true
}
module.exports = checkFeasible

function checkIntermediaryFeasible(position, options) {
  let options2 = {}
  Object.assign(options2, options, {forbidStringSharing: false})
  return checkFeasible(position, options2)
}
module.exports.intermediary = checkIntermediaryFeasible
