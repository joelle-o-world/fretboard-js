var pitch = require("./pitch.js");
var WeightedSet = require("./WeightedSet.js");
var numeral = require("./numeral.js");

function HarmonySymbol() {
    this.root;
    this.color;
}
module.exports = HarmonySymbol;

HarmonySymbol.prototype.isHarmonySymbol = true

HarmonySymbol.prototype.__defineGetter__("colorProfile", function() {
    if(this._colorProfile != undefined) {
        return this._colorProfile.slice();
    } else {
        var cp = this.colorRef[this.color];
        if(cp == undefined)
            throw "unknown color! \'" + this.color + "\'\n";

        return this.colorRef[this.color].slice();
    }
});
HarmonySymbol.prototype.__defineSetter__("colorProfile", function(cp) {
    this._colorProfile = cp;
})
HarmonySymbol.prototype.__defineGetter__("colorProfileAsPitchClasses", function() {
    var cp = this.colorProfile;
    for(var i in cp) {
        cp[i] = pitch.pc(cp[i]);
    }
    cp = cp.sort(function(a,b) {return a-b;});
    return cp;
});
HarmonySymbol.prototype.__defineGetter__("octaveProfile", function() {
    var cp = this.colorProfile;
    var op = [];
    for(var i in cp) {
        op.push(pitch.pc(cp[i] + this.root));
    }
    op = op.sort( function(a,b) {return a-b;});
    return op;
});

HarmonySymbol.prototype.colorRef = {};

HarmonySymbol.prototype.degreeToP = function(degree) {
    var accidental = 0;
    if(typeof degree == "string") {
        var nume = numeral.parse(degree);
        degree = nume.degree;
        if(nume.accidental)
            accidental = nume.accidental;
    }
    var cp = this.colorProfileAsPitchClasses;
    var octave = pitch.octave(degree, cp.length);
    degree = degree - octave*cp.length;
    if(degree%1 == 0)
        p = this.root + cp[degree] + octave*12;
    else
        p = this.degreeToP(Math.floor(degree)) * (1-degree%1)
            + this.degreeToP(Math.ceil(degree)) * (degree%1)
            + octave*12;
    p += accidental;
    return p;
}
HarmonySymbol.prototype.pToDegree = function(p) {
    p -= this.root;
    var cp = this.colorProfileAsPitchClasses;
    var octaveP = pitch.octave(p)*cp.length;
    var pc = pitch.pc(p);
    cp.push(12);

    for(var d=0; d<cp.length; d++) {
        if(cp[d] == pc)
            return d + octaveP;
        if(cp[d] > pc) {
            return octaveP + d-1 + (pc-cp[d-1])/(cp[d]-cp[d-1]);
        }
    }
}
HarmonySymbol.prototype.degreeShift = function(p, shift) {
    var degree = this.pToDegree(p);
    var d1 = degree
    if(shift > 0)
        degree = Math.floor(degree)
    else if(shift < 0)
        degree = Math.ceil(degree);
    else if(shift == 0)
        degree = Math.round(degree);
    var d2 = degree
    degree += shift;
    var d3 = degree
    return this.degreeToP(degree);
}

HarmonySymbol.prototype.containsPitchClasses = function(pcs) {
    if(pcs == undefined)
      return false
      
    if(pcs.constructor == Number) {
        pcs = [pcs];
    }
    var op = this.octaveProfile;

    for(var i in pcs) {
        if(op.indexOf(pcs[i]) == -1) {
            return false;
        }
    }
    return true;
}
HarmonySymbol.prototype.checkPitch = function(p) {
    return this.containsPitchClasses(pitch.pc(p));
}

HarmonySymbol.prototype.pitchSetInRange = function(lo, hi, inclusiveOfHi) {
    var list = this.pitchesInRange(lo, hi, inclusiveOfHi);

    var set = new WeightedSet();
    for(var i in list) {
        set.increment(listp[i]);
    }

    return set;
}
HarmonySymbol.prototype.pitchesInRange = function(lo, hi, inclusiveOfHi) {
    var op = this.octaveProfile;

    var loOct = Math.floor(lo/12);
    var hiOct = Math.ceil(hi/12);

    var set = [];

    var p;
    for(var octave=loOct; octave<=hiOct; octave++) {
        for(var i in op) {
            p = op[i] + octave*12;
            if(p > hi || (p == hi && !inclusiveOfHi)) {
                return set;
            }
            if(p>=lo) {
                set.push(p);
            }
        }
    }

    return set;
}
