function showMagicians(magicians: string[]): void{

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}


function makeGreat(magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++)  {

    }
}


const magicians2: string[] = ["rubab", "Taha","Sadaf"];
makeGreat(magicians2)
showMagicians(magicians2) 


function makeGreat2(magicians: string[]): string[] {
const greatMagicians: string[] = [];
for(let i =0; i <magicians.length; i++) {
    greatMagicians.push(magicians[i] +   `the Great`);
}
return greatMagicians;
}

const magicians3: string[] = ["rubab","taha","sadaf"];


const greatMagicians2: string[] = makeGreat2(magicians3);
showMagicians(magicians3);
showMagicians(greatMagicians2);
