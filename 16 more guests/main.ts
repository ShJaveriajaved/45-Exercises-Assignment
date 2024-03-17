let guestList = ["Mahnoor","Afsha","Laiba","Maham"];

let dontCome = guestList[0];

console.log(dontCome, "Cannot come");

guestList.splice(0, 1, "Sadaf");

console.log("Good News! We have got a new bigger table for our dinner");

guestList.unshift("Ureba");

guestList.push("Mahin");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Nashra");

console.log("Updated List of my guests");

guestList.forEach(oneguest => console.log(`Greetings ${oneguest}, would you liketo have a dinner with me?`));
