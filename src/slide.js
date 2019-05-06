const checkFeasible = require('./checkFeasible')
const HandPosition = require('./HandPosition')
const {cycle} = require('./combinations')

function checkSlide(A, B, options) {
  // A and B must both be feasible hand positions.
  if(!checkFeasible(A, options) || !checkFeasible(B, options))
    return false

  // The string of each engaged finger in B must be the same as it was in A.
  // Disengaged fingers must remain disengaged.
  for(let i in A.fingers)
    if(A.fingers[i].string != B.fingers[i].string)
      return false

  // Otherwise,
  return true
}

function* allSlides(position1, options={}) {
  // destructure options and assign defaults
  let {
      minFingerStretch = 0,
      maxFingerStretch = 2,
      maxHandStretch = 2,
      numberOfFrets = 12,
  } = options
  let nFingers = position1.fingers.length

  let engagedFingers = []
  for(let i=0; i<nFingers; i++)
    if(position1.fingers[i].fret)
      engagedFingers.push(i)

  let stretchOpts = [count(1,numberOfFrets)]
  for(let i=1; i<engagedFingers.length; i++) {
    let dif = engagedFingers[i] - engagedFingers[i-1]
    let min = minFingerStretch * dif
    let max = maxFingerStretch * dif
    stretchOpts[i] = count(min, max)
  }

  for(let stretches of cycle(...stretchOpts)) {
    let position2 = HandPosition.empty(nFingers)
    let fret = 0
    for(let i in stretches) {
      let finger = engagedFingers[i]
      fret += stretches[i]
      position2.fingers[finger] = {
        fret: fret,
        string: position1.fingers[finger].string
      }
    }

    if(checkFeasible(position2))
      yield position2
  }
}
module.exports.all = allSlides

function count(from, to) {
  let list = []
  for(let i=from; i<=to; i++)
    list.push(i)
  return list
}

function randomSlide(position1, options={}) {
  // Destructure options, assigning defaults..
  let {
    minFingerStretch = 0,
    maxFingerStretch = 2,
    maxHandStretch = 2,
    numberOfFrets = 12,
  } = options

  let fret = null
  let position2 = HandPosition.empty(position1.fingers.length)
  for(let i=0; i<position1.fingers.length; i++)
    if(position1.fingers[i].fret != null) {
      // Found an engaged finger.
      if(!fret) {
        // The first engaged fret can have any value.
        fret = Math.floor(Math.random()*(numberOfFrets-1) + 1)
        position2.fingers[i] = {
          fret: fret,
          string: position1.fingers[i].string
        }
      } else {
        // Subsequent engaged frets are limited by the min/max finger stretches
        let stretch = minFingerStretch + Math.floor(Math.random()*(maxFingerStretch-minFingerStretch+1))
        fret += stretch
        position2.fingers[i] = {
          fret: fret,
          string: position1.fingers[i].string
        }
      }
    }

  if(checkFeasible(position2, options))
    return position2
  else
    // If unfeasible repeat until a feasible result is found.
    return randomSlide(position1, options) // This could lead to stack overflow!
    // Should be fine so long as some feasible slide exists.
}
module.exports.random = randomSlide
