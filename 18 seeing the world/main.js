var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Maldives", "Japan", "Germany", "Switzerland"];
console.log("Real Order:", countriesToVisit);
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in Real Order:", countriesToVisit);
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in Real Order:", countriesToVisit);
console.log("Real array Reversed", countriesToVisit.reverse());
console.log("Back to Real Order", countriesToVisit.reverse());
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
console.log("Real array Reversed", countriesToVisit.reverse());
