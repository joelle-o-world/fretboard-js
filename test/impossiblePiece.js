const walkThroughBach = require('../src/walkThroughBach')
const randomHandPosition = require('../src/randomFeasibleHandPosition')
const stepAndSlide = require('../src/stepAndSlide')
const step = require('../src/step')
const tunings = require('../src/tunings')
const lilypond = require('../src/lilypond')
const fs = require('fs')
const {getChord} = require('../src/chord')
const includeReleventOpenStrings = require('../src/includeReleventOpenStrings')

function makeImpossiblePiece() {
  let tuning = []
  for(let i=0; i<7; i++)
    tuning.push(50 + 3*i)

  console.log(tuning)

  const options = {
    numberOfFingers: 7,
    minFingerStretch: 0, // in frets
    maxFingerStretch: 2, // in frets
    maxHandStretch: 5, // in frets
    numberOfStrings: tuning.length,
    numberOfFrets: 12,
    pOmitFinger: 1/10, // probability of omitting each finger
    pOpenString: 1/2, // probability of playing an open string
    tuning: tuning
  }

  const n = 100

  let positions = [randomHandPosition(options)]
  for(let i=1; i<n; i++)
    positions[i] = stepAndSlide.random(positions[i-1], options)

  for(let i in positions) {
    let chord = getChord(positions[i], options.tuning)
    if(chord)
      positions[i] = includeReleventOpenStrings(
        chord,
        positions[i],
        options.tuning
      )
  }

  console.log(positions)

  let chordSheet = lilypond.pabloSheet(
    positions,
    options.tuning,
    {
      diagrams: true,
      noteValue: 1,
      blankStave: false,
      tab: false,
      cadenza:true,
      strum: true,
    },
  )

  //console.log('saving lilypond')
  //fs.writeFileSync('./output/impossible.ly', chordSheet)

  return {
    lilypond: chordSheet,
    positions: positions,
    tuning: options.tuning
  }
}
module.exports = makeImpossiblePiece
