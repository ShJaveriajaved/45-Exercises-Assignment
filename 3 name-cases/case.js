var personName = "Javeria Javed";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (dine) { return dine.toUpperCase(); }));
