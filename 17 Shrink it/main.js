var guestList = ["Mahnoor", "Afsha", "Laiba", "Maham"];
var dontCome = guestList[0];
console.log(dontCome, "Cannot come");
guestList.splice(0, 1, "Sadaf");
console.log("Good News! We have got a new bigger table for our dinner");
guestList.unshift("Ureba");
guestList.push("Mahin");
var middleIndex = Math.floor(guestList.length / 2);
console.log("Unfortunately, the new dinner table cannot be available on time so I can only invie only two persons at once");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Pardon, ".concat(removedGuest, " I cannot invite you to the dinner"));
}
console.log("Invitation to the last two guests");
guestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to the dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
