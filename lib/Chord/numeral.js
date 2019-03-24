exports.pack = function(numeral) {
    var accidental = numeral.accidental || 0;
    if(numeral.accidental == -1) accidental = "b";
    else if(numeral.accidental == 1) accidental = "#";
    else if(numeral.accidental == 0) accidental = "";

    var degree = numeral.degree%numes.length;
    if(degree < 0) degree += numes.length;
    degree = numes[degree];

    var color = numeral.color || "";
    if(color[0] == "m") {
        degree = degree.toLowerCase();
        color = color.slice(1);
    }

    var inversion = String.fromCharCode(97 + (numeral.inversion || 0));
    if(inversion == "a") inversion = "";

    return accidental + degree + color + inversion;
}

exports.parse = function(str) {
    var accidental;
    if(str[0] == "b") {
        accidental = -1;
        str = str.slice(1);
    } else if(str[0] == "#") {
        accidental = 1;
        str = str.slice(1);
    } else {
        accidental = 0;
    }

    var nume = str.match(/[VvIi]*/)[0];
    var minor = nume == nume.toLowerCase();
    str = str.slice(nume.length);
    if(str.length > 0 && str[str.length-1].match(/[a-i]/)) {
        var inversion = str.charCodeAt(str.length-1)-97;
        str = str.slice(0, str.length-1);
    } else {
        var inversion = 0;
    }
    var color = str;
    if(minor) color = "m"+color;

    var degree;
    if(nume != "") {
        degree = numes.indexOf(nume.toUpperCase());
    }

    return {
        "degree": degree,
        "accidental": accidental,
        //"minor": minor,
        "inversion": inversion,
        "color": color
    }
}
numes = ["I", "II", "III", "IV", "V", "VI", "VII"];
