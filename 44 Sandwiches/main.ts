function sandwich(...items: string[]): void{
    console.log("Sandwich order:")


    for(let i=0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your sandwich Miss Javeria")

//items
sandwich(`Chicken`,`Olives`,`Onions`)
sandwich(`Zingerpiece`,`tomato`,`garlic sauce`)
sandwich(`Beef`,`oregano`,`Mayo sauce`)