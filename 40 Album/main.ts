function makeAlbum (artist: string, title: string): {artist: string; title : string} {
    const dictionaries = {
artist: artist.charAt(0).toUpperCase() + artist.slice(1),
title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
    }

    let make  = makeAlbum("Sadaf", "shadow")
    console.log(make)

    let say = makeAlbum("Aqsa", "sticker")
    console.log(say)

    let done = makeAlbum("Javed", "Sargum")
    console.log(done)

