function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var make = makeAlbum("Sadaf", "shadow");
console.log(make);
var say = makeAlbum("Aqsa", "sticker");
console.log(say);
var done = makeAlbum("Javed", "Sargum");
console.log(done);
