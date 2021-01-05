const country = 'Brazil'
const continent = 'LAM'
let population = 220000000
const language = 'Portuguese'
const isIsland = false


console.log(country)
console.log(continent)
console.log(population)

let description = country + " is located in " + continent + ", speaks " + language + " and has a population of " + population
console.log(description)

// STRING TEMPLATES!
description = `${country} is located in ${continent}, speaks ${language} and has a population of ${population}`
console.log(description)

console.log("String with \n\ multiple \n\ lines")

console.log(`String with
multiple
lines`)