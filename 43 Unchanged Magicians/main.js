function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
    }
}
var magicians2 = ["rubab", "Taha", "Sadaf"];
makeGreat(magicians2);
showMagicians(magicians2);
function makeGreat2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + "the Great");
    }
    return greatMagicians;
}
var magicians3 = ["rubab", "taha", "sadaf"];
var greatMagicians2 = makeGreat2(magicians3);
showMagicians(magicians3);
showMagicians(greatMagicians2);
