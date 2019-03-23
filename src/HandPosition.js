class HandPosition {
  constructor({fingers, openStrings=[]}) {
    this.fingers = fingers // an array of finger positions
    this.openStrings = openStrings // a list of open strings
    // ^ should replace with .soundingStrings and make open string a getter
  }

  duplicate() {
    return new HandPosition({
      fingers: this.fingers.map(({fret, string}) => ({fret, string})),
      openStrings: this.openStrings.slice()
    })
  }

  static empty(numberOfFingers=4) {
    let fingers = []
    for(let finger=0; finger<numberOfFingers; finger++)
      fingers.push({fret:null, string: null})

    return new HandPosition({fingers: fingers, openStrings:[]})
  }

  static compare(A, B) {
    // return true if A and B are equal
    if(A.fingers.length != B.fingers.length)
      return false
    for(let n=0; n<A.fingers.length; n++) {
      if(A.fingers[n].fret != B.fingers[n].fret)
        return false
      if(A.fingers[n].string != B.fingers[n].string)
        return false
    }

    if(A.openStrings.length != B.openStrings.length)
      return false
    for(let i in A.openStrings)
      if(A.openStrings[i] != B.openStrings[i])
        return false

    return true
  }

  // movement
  liftFinger(fingerNumber) {
    let copy = this.duplicate()
    copy.fingers[fingerNumber] = {fret: null, string:null}
    return copy
  }

  moveFinger(fingerNumber, {fret, string}) {
    let copy = this.duplicate()
    copy.fingers[fingerNumber] = {fret: fret, string: string}
    return copy
  }

  // measurements
  get lowestFrettedFinger() {
    for(let finger of this.fingers)
      if(finger.fret != null)
        return finger
  }
  get highestFrettedFinger() {
    for(let i=this.fingers.length-1; i >= 0; i--)
      if(this.fingers[i].fret != null)
        return this.fingers[i]
  }

  get lowestFret() {
    let finger = this.lowestFrettedFinger
    if(finger)
      return finger.fret
    else
      return null
  }
  get highestFret() {
    let finger = this.highestFrettedFinger
    if(finger)
      return finger.fret
    else
      return null
  }

  get width() {
    let low = this.lowestFret
    let high = this.highestFret
    if(low != undefined && high != undefined)
      return high-low
    else
      return null
  }

  // formatting
  fretsByString(numberOfStrings=6) {
    let out = new Array(numberOfStrings).fill(null)
    for(let string of openStrings)
      out[string] = 0

    for(let {fret, string} of fingers)
      if(fret != null && (!out[string] || fret > out[string]))
        out[string] = fret

    return out
  }
  lilypondFretDiagram(numberOfStrings=6) {
    let byString = []
    for(let n=0; n<this.fingers.length; n++) {
      let finger = this.fingers[n]
      let {fret, string} = finger
      if(fret != null && (!byString[string] || fret > byString[string].fret))
        byString[finger.string] = {fret: fret, fingerNumber: n}
    }

    for(let string=0; string<numberOfStrings; string++)
      if(byString[string])
        byString[string] = byString[string].fret + '-' + byString[string].fingerNumber
      else {
        if(this.openStrings.includes(string))
          byString[string] = 'o'
        else
          byString[string] = 'x'
      }

    return "\\markup { \\fret-diagram-terse #\"" + byString.join(';')+';' + "\" }"
  }
}
module.exports = HandPosition
