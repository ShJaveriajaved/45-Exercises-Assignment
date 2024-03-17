function makeShirt(size: string = `large`, text: string = `I am a programmer`): void{
    console.log(`you have order a ${size} shirt that says ${text}`)
}

makeShirt();
makeShirt(`medium`)


//Another message
makeShirt(`small`, `I will make my parents proud`)