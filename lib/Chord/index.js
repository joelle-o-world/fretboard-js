var HarmonySymbol = require("./HarmonySymbol.js");
function Chord(model) {
    HarmonySymbol.call(this);

    this.root; // number
    this.color; // string
    this.bass;

    if(model != undefined && model.constructor == Chord) {
        this.root = model.root;
        this.color = model.color;
        this.bass = model.bass
    } else if(model != undefined && model.constructor == String) {
        this.print = model;
    }
}
Chord.prototype = Object.create(HarmonySymbol.prototype);
Chord.prototype.constructor = Chord;

module.exports = Chord;

Chord.random = function() {
  var chord = new Chord()
  chord.root = Math.floor(Math.random()*12);
  var colors = Object.keys(Chord.prototype.colorRef);
  chord.color = colors[Math.floor(Math.random()*colors.length)];
  return chord;
}

var pitch = require("./pitch.js");
var Scale = require("./Scale.js");

Chord.prototype.colorRef /* require an external json? */ = {
    /* This object is also responsible for setting a standard on spelling synonymous chords.
        eg/ use 'o' not 'dim' */

    // major
    "":     [0, 4, 7],
    "6":    [0, 4, 7, 9],
    "7":    [0, 4, 7, 10],
    "maj7": [0, 4, 7, 11],
    "9":    [0, 4, 7, 10, 14],
    "7b9":  [0, 4, 7, 10, 11],
    "13":   [0, 4, 7, 10, 14, 17, 21],

    // minor
    "m": [0, 3, 7],
    "m7": [0, 3, 7, 10],

    // diminished
    "o": [0, 3, 6],
    "o7": [0, 3, 6, 9],
    "hd7": [0, 3, 6, 10],

    // augmented
    "+": [0, 4, 8],
    "+7": [0, 4, 8, 10]
}
Chord.prototype.__defineGetter__("third", function() {
  var third = this.colorProfile[1]
  if(third >= 2.5 && third <=4.5)
    return pitch.pc(third + this.root)
})
Chord.allChords = function() {
    var list = [];
    for(var color in Chord.prototype.colorRef) {
        for(var root=0; root<12; root++) {
            var chord = new Chord();
            chord.root = root;
            chord.color = color;
            list.push(chord);
        }
    }
    return list;
}
Chord.allChordsInAllInversions = function() {
    var chords = Chord.allChords();
    var inversions = [];
    for(var i in chords) {
        var chord = chords[i];
        var op = chord.octaveProfile;
        for(var inv=0; inv<op.length; inv++) {
            var chord2 = new Chord(chord);
            chord2.inversion = inv;
            inversions.push(chord2);
        }
    }
    return inversions;
}
Chord.fromOctaveProfile = function(op, extraThreshold) {
    // search for a chord to represent a given octave profile, op.
    // returns either a Chord object or '?' (in the case that none can be found)
    if(extraThreshold == undefined) {
        extraThreshold = 0;
    }
    var chords = Chord.allChords();
    var results = [];
    for(var i in chords) {
        var matches = 0;
        var chordOP = chords[i].octaveProfile;
        for(var j in op) {
            if(chordOP.indexOf(op[j]) != -1) {
                matches++;
            }
        }
        var extras = op.length-matches;
        var truants = chordOP.length - matches;
        //console.log(matches, extras, truants, truantThreshold, extraThreshold);
        if(extras <= extraThreshold) {
            results.push(chords[i]);
        }
    }

    if(results.length == 0) {
        return null;
    } else {
        var winner = results[0];
        var winningScore = results[0].octaveProfile.length;
        for(var i=1; i<results.length; i++) {
            var score = results[i].octaveProfile.length;
            if(score < winningScore) {
                winner = results[i];
                winningScore = score;
            }
        }
        return winner;
    }
}
Chord.parseChord = function(chord, scale) {
    if(chord == undefined) {
        return undefined;
    }
    if(chord.constructor == Chord) {
        return new Chord(chord);
    } else if(chord.constructor == String) {
        if(chord.indexOf(": ") != -1) {
            chord = chord.split(": ");
            scale = new Scale(chord[0]);
            chord = chord[1];
        }
        if(scale != undefined) {
            if(scale.constructor == String) {
                scale = new Scale(scale);
            }
            if(Chord.numeralOrJazz(chord)) {
                // chord string uses numerals
                return scale.numeralToChord(chord);
            } else {
                // chord string uses jazz notation
                chord = new Chord(chord);
                return chord
            }
        } else {
            return new Chord(chord);
        }
    }
}
Chord.numeralOrJazz = function(str) {
    // returns true if chord string is written with roman numerals
    if(str.charAt(0).match(/[A-G]/)) {
        if(str.charAt(1) == ":") {
            console.log("someone put a scale in here :Z");
        }
        return false;
    } else {
        return true;
    }
}

Chord.prototype.__defineGetter__("inversion", function() {
    if(this.bass == undefined) {
        return 0;
    }
    var b = pitch.pc(this.bass - this.root);
    var cp = this.colorProfile;
    for(var inversion=0; inversion<cp.length; inversion++) {
        if(pitch.pc(cp[inversion]) == b) {
            return inversion;
        }
    }
    console.log("couldn't identify inversion:(", this);
    return undefined;
});
Chord.prototype.__defineSetter__("inversion", function(inversion) {
    if(inversion == undefined) {
        this.bass = undefined;
        return;
    }
    var op = this.octaveProfile;
    this.bass = op[inversion%op.length];
});
Chord.prototype.__defineGetter__("bassPc", function() {
  return pitch.pc(this.bass || this.root)
})
Chord.prototype.__defineGetter__("print", function() {
    var s = pitch.printPitchClass(this.root)+this.color;
    if(this.bass != undefined && this.bass != this.root) {
      s += "/" + pitch.printPitchClass(this.bass);
    }
    return s;
});
Chord.prototype.__defineSetter__("print", function(s) {
    if(s.charAt(1) == "b" || s.charAt(1) == "#") {
        var letter = s.slice(0,2);
    } else {
        var letter = s.charAt(0);
    }
    this.root = pitch.parsePitchClass(letter);
    s = s.slice(letter.length);
    s = s.split("/");
    this.color = s[0];
    if(s[1])
      this.bass = pitch.parsePitchClass(s[1]);
    else
      this.bass = undefined;

    return this;
});


Chord.prototype.randomise = function() {
    this.root = Math.floor(Math.random()*12);
    var colors = Object.keys(Chord.prototype.colorRef);
    this.color = colors[Math.floor(Math.random()*colors.length)];
    return this;
}

// This function is most likely not that useful :(
function colourStrToArr(s) {
    var elements = new Array();
    var op = new Array();

    var majorScale = [0, 2, 4, 5, 7, 9, 11];

    var el = "";
    for(var i in s) {
        if(s[i] == " ") {
            continue;
        }
        el += s[i];
        if(s[i].match(/[2-9]/)) {
            elements.push(el);
            el = "";
        }
    }

    var accidental;
    var degree;
    for(var i in elements) {
        if(elements[i][0] == "b") {
            elements[i] = elements[i].slice(1);
            accidental = -1;
        } else if(elements[i][0] == "#") {
            elements[i] = elements[i].slice(1);
            accidental = +1;
        } else {
            accidental = 0;
        }

        degree = (parseInt(elements[i])-1)%7;
        op.push( majorScale[degree] + accidental );
    }

    op = op.sort(function(a, b) { return a-b });

    return op;
}
