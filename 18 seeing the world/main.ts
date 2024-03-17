let countriesToVisit: string[] = ["China", "Maldives", "Japan", "Germany", "Switzerland"];

console.log("Real Order:", countriesToVisit);

console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("Still in Real Order:", countriesToVisit);

console.log("Reverse Order:", [...countriesToVisit].reverse());

console.log("Still in Real Order:", countriesToVisit);

console.log("Real array Reversed", countriesToVisit.reverse());

console.log("Back to Real Order", countriesToVisit.reverse());

console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

console.log("Real array Reversed", countriesToVisit.reverse());
