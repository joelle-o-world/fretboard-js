module.exports = {
  getLowestFrettedFinger: function({fingers}) {
    for(let finger of fingers) {
      if(finger.fret != null)
        return finger
    }
  },
  getHighestFrettedFinger: function({fingers}) {
    for(let i=fingers.length-1; i>=0; i--)
      if(fingers[i].fret != null)
        return fingers[i]
  },

  getLowestFret: function({fingers}) {
    for(let {fret} of fingers) {
      if(fret != null)
        return fret
    }
  },
  getHighestFret: function({fingers}) {
    for(let i=finger.length-1; i>=0; i--)
      if(fingers[i].fret != null)
        return fingers[i].fret
  }
}
