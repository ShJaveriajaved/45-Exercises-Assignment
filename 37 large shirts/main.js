function makeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I am a programmer"; }
    console.log("you have order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt();
makeShirt("medium");
//Another message
makeShirt("small", "I will make my parents proud");
