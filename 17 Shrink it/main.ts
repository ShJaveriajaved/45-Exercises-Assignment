let guestList = ["Mahnoor","Afsha","Laiba","Maham"];

let dontCome = guestList[0];

console.log(dontCome, "Cannot come");

guestList.splice(0, 1, "Sadaf");

console.log("Good News! We have got a new bigger table for our dinner");

guestList.unshift("Ureba");

guestList.push("Mahin");

let middleIndex: number = Math.floor(guestList.length / 2);


console.log("Unfortunately, the new dinner table cannot be available on time so I can only invie only two persons at once");

while(guestList.length > 2) {

    let removedGuest = guestList.pop();
    console.log(`Pardon, ${removedGuest} I cannot invite you to the dinner`);
}

console.log("Invitation to the last two guests");

guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to the dinner` ));

guestList.pop();
guestList.pop();
        
console.log("Empty List:", guestList);
