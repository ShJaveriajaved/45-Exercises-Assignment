function describeCity(city : string,country: string = `Pakistan`): void {
    console.log(`${city} is in ${country}`)
}

//each one
describeCity(`Karachi`)
describeCity(`Sydney`,`Australia`)
describeCity(`Beijing`,`China`)
