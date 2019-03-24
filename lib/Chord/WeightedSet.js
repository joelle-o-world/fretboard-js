function WeightedSet(set) { // a faster version of PSet that only accepts string and number values.
    this.items = new Object();

    if(set != undefined && set.constructor == WeightedSet) {
        for(var i in set.items) {
            this.increment(i, set.items[i]);
        }
    } /*else if(set != undefined && set.constructor == PSet) {
        for(var i in set.items) {
            this.increment(set.items[i].value, set.items[i].p);
        }
    }*/ else if(set != undefined && set.constructor == Array) {
        for(var i in set) {
            this.increment(set[i]);
        }
    }
}

WeightedSet.prototype.increment = function(val, p) {
    // increase the weight of an item, adding a new entry if it does not exist
    if(val != undefined && val.constructor == Array) {
        for(var i in val) {
            this.increment(val[i], p);
        }
        return this;
    }
    if(p == undefined) {
        p = 1;
    }
    if(this.items[val] == undefined) {
        this.items[val] = 0;
    }
    this.items[val] += p;

    return this;
}
WeightedSet.prototype.flatten = function(w) {
    // make all items to an equal weight
    if(w == undefined) {
        w = 1;
    }
    for(var i in this.items) {
        if(this.items[i] != 0) {
            this.items[i] = w;
        } else {
            delete this.items[i];
        }
    }
}
WeightedSet.prototype.multiply = function(scaleFactor) {
    for(var i in this.items) {
        this.items[i].weight *= scaleFactor;
    }
    return this;
}
WeightedSet.prototype.normalise = function() {
    this.pSum = 1;
    return this;
}

WeightedSet.prototype.addSet = function(set) {
    // increment this set with the values of another
    for(var i in set.items) {
        this.increment(i, set.items[i]);
    }
}

WeightedSet.prototype.transform = function(transformationFunction) {
    // return new set with a transformation performed on the values
    var newSet = new WeightedSet();

    var args = Array.prototype.slice.call(arguments);
    for(var i in this.items) {
        args[0] = i;
        var newValue = transformationFunction.apply(null, args);
        newSet.increment(newValue, this.items[i]);
    }
    return newSet;
}

WeightedSet.prototype.findOverlapWith = function(set) {
    var answer = new WeightedSet();
    for(var i in set.items) {
        var p = this.pOfValue(i) * set.items[i];
        if(p > 0) {
            answer.increment(i, p);
        }
    }
    return answer;
}

WeightedSet.prototype.pOfValue = function(val) {
    if(this.items[val] != undefined) {
        return this.items[val];
    } else {
        return 0;
    }
}

WeightedSet.prototype.__defineGetter__("itemsAsArray", function() {
    var list = [];
    for(var i in this.items) {
        if(this.items) {
            list.push(i);
        }
    }
    return list;
});
WeightedSet.prototype.__defineGetter__("numberOfItems", function() {
    return Object.keys(this.items).length;
});
WeightedSet.prototype.__defineGetter__("isEmpty", function() {
    return this.numberOfItems == 0;
});
WeightedSet.prototype.__defineGetter__("pSum", function() {
    var sum = 0;
    for(var i in this.items) {
        sum += this.items[i];
    }
    return sum;
});
WeightedSet.prototype.__defineSetter__("pSum", function(n) {
    var sf = n/this.pSum;
    if(sf == NaN) {
        console.log("Tried to set pSum of empty WeightedSet", this);
        return;
    }

    for(var i in this.items) {
        this.items[i] *= sf;
    }
});


WeightedSet.prototype.roll = function() {
    var rand = Math.random()*this.pSum;

    for(var i in this.items) {
        rand -= this.items[i];
        if(rand <= 0) {
            if(parseFloat(i) == i)
              i = parseFloat(i)
            return i;
        }
    }
}
WeightedSet.prototype.rollUnweighted = function() {
    var keys = Object.keys(this.items);
    return keys[Math.floor(Math.random()*keys.length)];
}
WeightedSet.prototype.sortRoll = function() {
    var sum = this.pSum;

    var list = new Array();

    var len = Object.keys(this.items).length;
    for(var i=0; i<len; i++) {
        var pt = Math.random()*sum;
        for(var j in this.items) {
            if(list.indexOf(j) != -1) {
                continue;
            }

            pt -= this.items[j];

            if(pt <= 0) {
                list[i] = (j);
                sum -= this.items[j];
                break;
            }
        }
    }
    return list;
}
WeightedSet.prototype.mapWeights = function(F, keepZeros) {
  var newSet = new WeightedSet()
  for(var val in this.items) {
    var newWeight = F(val, this.items[val])
    if(newWeight != 0 || keepZeros)
      newSet.increment(val, newWeight)
  }
  return newSet
}

function WeightedSet_functionCombine(setA, setB, func) {
    if(func == undefined) {
        func = function(a, b) {
            return a + b;
        }
    }
    setA = new WeightedSet(setA);
    setB = new WeightedSet(setB);

    setA.pSum = 1;
    setB.pSum = 1;

    var answer = new WeightedSet();
    for(var valA in setA.items) {
        for(var valB in setB.items) {
            var val = func(valA, valB);
            var p = setA.items[valA] * setB.items[valB];
            answer.increment(val, p);
        }
    }
    return answer
}

module.exports = WeightedSet;
