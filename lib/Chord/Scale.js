var HarmonySymbol = require("./HarmonySymbol.js");
const Chord = require("./index.js")
const pitch = require("./pitch.js")

function Scale(model) {
    HarmonySymbol.call(this);

    this.root = 0; // number
    this.color = "major";

    if(model != undefined && model.constructor == Scale) {
        this.root = model.root;
        this.color = model.color;
    } else if(model != undefined && model.constructor == String) {
        this.print = model;
    }
}
Scale.prototype = Object.create(HarmonySymbol.prototype);
Scale.prototype.constructor = Scale;

module.exports = Scale;

Scale.prototype.isScale = true



Scale.prototype.__defineGetter__("print", function() {
    var pc = pitch.printPitchClass(this.root);
    if(this.color == "major") {
        return pc + ":";
    } else if(this.color == "minor") {
        var pc2 = pc.charAt(0).toLowerCase();
        if(pc.length >= 2) {
            pc2 += pc.charAt(1);
        }
        return pc2 + ":";
    } else if(this.color == "chromatic") {
        return pc + "*:";
    }
});
Scale.prototype.__defineSetter__("print", function(s) {
    this.root = pitch.parsePitchClass(s);

    if(s.charAt(0).match(/[A-G]/)) {
        this.color = "major";
    } else if(s.charAt(0).match(/[a-g]/)) {
        this.color = "minor";
    } else if(s.charAt(s.length-2) == "*") {
        this.color = "chromatic";
    } else {
        this.color = undefined;
    }
});

Scale.prototype.colorRef = {
    "major": [0, 2, 4, 5, 7, 9, 11],
    "minor": [0, 2, 3, 5, 7, 8, 10],
    "chromatic": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}

Scale.prototype.numerals = ["I", "II", "III", "IV", "V", "VI", "VII"];


Scale.prototype.pToNumeral = function(p) {
    var pc = pitch.pc(p-this.root);
    var cp = this.colorProfile;
    for(var deg=0; deg<cp.length; deg++) {
        if(cp[deg] == pc) {
            return this.numerals[deg];
        }
    }
    for(var deg=0; deg<cp.length; deg++) {
        if(cp[deg]-1 == pc) {
            return "b" + this.numerals[deg];
        }
    }
    for(var deg=0; deg<cp.length; deg++) {
        if(cp[deg]+1 == pc) {
            return "#" + this.numerals[deg];
        }
    }
}

Scale.prototype.numeralToChord = function(chord) {
    if(chord.constructor == String) {
        var degree = chord.match(/[b#]?[VIvi]+/)[0];
        var color = chord.slice(degree.length);

        if( color.charAt(color.length-1).match(/[a-g]/) ) {
            var inversion = color.charCodeAt(color.length-1) - 97;
            color = color.slice(0, color.length-1);
        } else {
            var inversion = 0;
        }

        //console.log(degree, "'"+color+"'", inversion);

        if(degree.match(/[vi]/) && Chord.prototype.colorRef["m"+color] != undefined) {
            color = "m"+color;
            //console.log("used experimental feature..");
        }
        degree = this.degreeToP(degree);

        var newchord = new Chord();
        newchord.root = pitch.pc(degree);
        newchord.color = color;

        newchord.bass = pitch.pc(newchord.colorProfile[inversion] + newchord.root);

        return newchord;
    }
}
Scale.prototype.chordToNumeral = function(chord) {
    if(chord == undefined) {
        return undefined;
    }
    if(chord.constructor == String) {
        chord = new Chord(chord);
    }
    if(chord.constructor == Chord) {
        var numeral = this.pToNumeral(chord.root);
        var color = chord.color;
        var bass = "";
        var inversion;

        if(chord.colorProfile.indexOf(3) != -1) {
            if(color.charAt(0) == "m") {
                color = color.slice(1);
            }
            numeral = numeral.toLowerCase();
        }

        if(chord.bass != undefined) {
           // bass = chord.colorProfile.indexOf(pitch.pc(chord.bass));
           inversion = chord.inversion;
           if(inversion > 0) {
               bass = String.fromCharCode(inversion+97);
           }
        }

        return numeral + color + bass;
    }
}

Scale.prototype.randomise = function() {
    this.root = Math.floor(Math.random()*12);
    this.color = Math.random()<=0.75 ? "major" : "minor";
    return this;
}

Scale.random = function() {
    return new Scale().randomise();
}
Scale.randomMajor = function() {
    var scale = new Scale().randomise()
    scale.color = "major"
    return scale
}
Scale.parseScale = function(str) {
    // return Scale represented by a string
    if(str.indexOf(": ") != -1) {
        return new Scale( str.slice(0,str.indexOf(": ")) );
    }
}
Scale.parseChordOrScale = function(s) {
    if(s.indexOf(":") == -1) {
        return new Chord(s);
    } else {
        return new Scale(s);
    }
}

Scale.all = function() {
  var scales = []
  for(var p=0; p<12; p++) {
    var major = new Scale()
    major.root = p
    major.color = "major"
    scales.push(major)

    var minor = new Scale()
    minor.root = p
    minor.color = "minor"
    scales.push(minor)
  }
  return scales
}

Scale.guessFromOctaveProfileStatistics = function(opStats) {
  var allScales = Scale.all()

  var winner
  var winningScore = 0

  for(var i in allScales) {
    var scale = allScales[i]
    var scaleOp = scale.octaveProfile

    var ignored = 0
    var intersectScore = 0
    for(var i in scaleOp) {
      var p = scaleOp[i]
      if(!opStats[p])
        ignored++
      intersectScore += opStats[p] || 0
    }
    var chromaticness = 0
    for(var p in opStats) {
      if(scaleOp.indexOf(parseFloat(p)) == -1)
        chromaticness += opStats[p]
    }
    var ignoreRatio = ignored/scaleOp.length

    var score = (intersectScore - chromaticness) * (1-ignoreRatio)
    //console.log(scale.print, score, intersectScore, chromaticness, ignoreRatio)

    if(score > winningScore) {
      winningScore = score
      winner = scale
    }
  }
  return winner
}

Scale.guess = function(something) {
  if(something) {
    var opStats = something.octaveProfileStatistics
    if(opStats)
      return Scale.guessFromOctaveProfileStatistics(opStats)
    else
      return Scale.guessFromOctaveProfileStatistics(something)
  }
}
