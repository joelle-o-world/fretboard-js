const HandPosition = require("./HandPosition")

const lp = require('./lilypond')
const pitch = require('./pitch')

const standardEADGBE = [40, 45, 50, 55, 59, 64]

function randomHandPosition({
  numberOfFingers = 4,
  minFingerStretch = 0, // in frets
  maxFingerStretch = 2, // in frets
  maxHandStretch = 3, // in frets
  numberOfStrings = 6,
  numberOfFrets = 12,
  pOmitFinger = 1/10, // probability of omitting each finger
  pOpenString = 1/2, // probability of playing an open string
}={}) {
  // choose frets for each finger
  let fingerStretches
  let handStretch
  do {
    fingerStretches = []
    handStretch = 0
    for(let i=1; i<numberOfFingers; i++) {
      let stretch = minFingerStretch + Math.floor(Math.random()*(maxFingerStretch-minFingerStretch+1))
      fingerStretches.push(stretch)
      handStretch += stretch
    }
  } while(handStretch > maxHandStretch)

  let fingers = []
  for(let i=0; i<numberOfFingers; i++)
    fingers[i] = {}

  // choose position on fretboard
  let handPosition = Math.floor(Math.random() * (numberOfFrets-handStretch-1))+1
  fingers[0].fret = handPosition
  for(let i=0; i<fingerStretches.length; i++) {
    let stretch = fingerStretches[i]
    fingers[i+1].fret = (fingers[i].fret + stretch)
  }

  // choose strings for each finger
  let stringPool = []
  for(let i=0; i<numberOfStrings; i++)
    stringPool.push(i)
  stringPool = stringPool.sort(() => Math.random()*2-1)

  for(let finger of fingers) {
    if(Math.random() < pOmitFinger) {
      // omit this finger
      finger.string = null
      finger.fret = null
    } else {
      // choose a string for this finger
      finger.string = stringPool.pop()
    }
  }

  // decide what to do with open strings
  let openStrings = stringPool
    .filter(() => Math.random() < pOpenString)
    .sort((A, B) => A-B)

  new HandPosition({
    fingers: fingers,
    openStrings:openStrings
  })
}

function fretShiftHandPosition(handPosition, fretShift=0) {
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

function getStretch({fingers}) {
  let min, max
  for(let {fret} of fingers) {
    if(fret != null) {
      if(min == null || fret < min)
        min = fret
      if(max == null || fret > max)
        max = fret
    }
  }

  if(min == null || max == null)
    return null
  else
    return max-min
}
function getPosition({fingers}) {
  for(let {fret} of fingers)
    if(fret != null)
      return fret
}

function randomShift(handPosition, numberOfFrets=12) {
  let width = getStretch(handPosition)
  let position = getPosition(handPosition)

  let newPosition = Math.floor(Math.random()*(numberOfFrets-width))
  let shift = newPosition-position

  return fretShiftHandPosition(handPosition, shift)
}

function fretsByString({openStrings, fingers}, numberOfStrings=6) {
  let out = new Array(numberOfStrings).fill(null)
  for(let string of openStrings) {
    out[string] = 0
  }
  for(let {fret, string} of fingers)
    if(fret != null)
      out[string] = fret

  return out
}

function getChord(handPosition, tuning=standardEADGBE) {
  // get a list of midi-pitches given a hand position and a midi-pitch-tuning
  let tab = fretsByString(handPosition)
  let chord = []
  for(let i in tab) {
    if(tab[i] == null || tuning[i] == null)
      continue

    chord.push(tab[i] + tuning[i])
  }

  return chord
}

function getPitchClassSet(handPosition, tuning=standardEADGBE) {
  let chord = getChord(handPosition, tuning)
  let op = []
  for(let p of chord) {
    let pc = pitch.pc(p)
    if(!op.includes(pc))
      op.push(pc)
  }
  return op.sort((A,B) => A-B)
}

function handPositionToLilypond(
  handPosition,
  tuning=standardEADGBE,
  //noteValue=1 // 2:minim, 4:crotchet, etc
) {
  let pitchFingerings = []
  for(let i=0; i<handPosition.fingers.length; i++) {
    let finger = handPosition.fingers[i]
    if(finger.fret == null)
      continue

    pitchFingerings.push({
      pitch: finger.fret + tuning[finger.string],
      fingering: i+1,
    })
  }
  for(let string of handPosition.openStrings)
    pitchFingerings.push({
      pitch: tuning[string],
      fingering: 0,
    })

  let notes = pitchFingerings
    .sort((A, B) => A.pitch-B.pitch)
    .map(
      ({pitch, fingering}) =>
        lp.printPitch(pitch) + '^' + fingering
    )

  return '< ' + notes.join(' ') + ' >'
}

module.exports = {
  randomHandPosition: randomHandPosition,
  fretShift: fretShiftHandPosition,
  randomShift: randomShift,
  fretsByString: fretsByString,
  getChord: getChord,
  lilypond: handPositionToLilypond,
  getPitchClassSet: getPitchClassSet,
  getStretch: getStretch,
}
