// Pitch functions
pitchClassNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];



function pc(p) {
    // return pitch class (0-11) of a midi number
    while(p >= 12) {
        p -= 12;
    }
    while(p < 0) {
        p += 12;
    }
    return p;
}
exports.pc = pc;

function octave(p, octaveSize=12) {
    // returns midi octave
    return Math.floor(p/octaveSize);
}
exports.octave = octave;

function pToF(p) {
    // return frequency (in Hz) of midi pitch
    // A = 440hz = midi 69 (lol)
    return 440 * Math.pow(2, (p-69)/12);
}
exports.pToF = pToF;
function fToP(f, round) {
    // return the midi number of a frequency (Hz)
    //console.log("Get robbie to help you make this function more efficient");
    //return (12/Math.log(2)) * Math.log(440/f) + 69;
    return 12 * Math.log(f/440) / Math.log(2) + 69
}
exports.fToP = fToP;

function printPitchClass(p) {
    // return string representation of pitch class
    if(p.constructor == String) {
        p = parseFloat(p);
    }
    p %= 12
    if(p < 0)
      p += 12
    return pitchClassNames[p];
}
exports.printPitchClass = printPitchClass;

function printPitch(p) {
    // return string representation of midi pitch
    var pitchclass = pc(p);
    var octave = (p-pitchclass)/12;
    return printPitchClass(p) + octave;
}
exports.printPitch = printPitch;

function parsePitchClass(s) {
    // extract the pitch class (as a number 0-11) from a string
    var letter = s.charAt(0);
    letter = letter.toUpperCase();
    var accidental;
    if(s.charAt(1) == "#") {
        accidental = 1;
    } else if(s.charAt(1) == "b") {
        accidental = -1;
    } else {
        accidental = 0;
    }

    var p = pitchClassNames.indexOf(letter);
    p += accidental;
    if(p >= 12)
        p -= 12;
    if(p < 0)
        p += 12;

    return p;
}
exports.parsePitchClass = parsePitchClass;

function parseOctave(str) {
  var matches = str.match(/-?\d+/)
  if(matches) {
    var pitchStr = str.slice(0, matches.index)
    if( /^[A-Ga-g]b?#?$/.test(pitchStr) )
      return parseFloat(matches[0])
  }
}
exports.parseOctave = parseOctave

function parsePitch(str) {
  if(str && str.constructor == Number)
    return str
  var pc = parsePitchClass(str)
  var octave = parseOctave(str)

  return pc + (octave || 0) * 12
}
exports.parsePitch = parsePitch
