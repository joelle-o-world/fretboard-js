const step = require("./step")
const slide = require('./slide')
const HandPosition = require('./HandPosition')

function randomStepAndSlide(position1, options) {
  return slide.random(step.random(position1, options), options)
}
module.exports.random = randomStepAndSlide

function* allStepAndSlides(position1, options) {
  let firstPositionYields = []
  for(let pos2 of step.all(position1, options)) {
    let first = true
    for(let pos3 of slide.all(pos2, options)) {
      if(first) {
        // check first position
        if(firstPositionYields.some(posY => HandPosition.compare(posY, pos3)))
          break;
        firstPositionYields.push(pos3)
        first = false
      }
      yield pos3
    }
  }
}
module.exports.all = allStepAndSlides
