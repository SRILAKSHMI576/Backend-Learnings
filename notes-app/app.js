const fs = require('fs')
const add = require("./utils")
const notes = require("./notes")
const validator = require('validator')
const chalk = require('chalk')

fs.writeFileSync("notes.txt", "Welcome to nodejs course.")

fs.appendFileSync("notes.txt", " i am srilakshmi")

const sum = add(4, -2)
// console.log(sum)

const getNote = notes("Your notes....")
// console.log(getNote)

//check string is correct or not using validator
const string = validator.isEmail("srilakshmigulla576@gmail.com")
const url = validator.isURL("www.google.com")
// console.log(string)
// console.log(url)

//print success in green color using chalk
const color = chalk.green("success")
const color2 = chalk.bold.green("success") // chalk.green.bold("success")
const color3 = chalk.bold.inverse.green("success")
const color1 = chalk.blue("hello") + "world" + chalk.green("!")
// console.log(color, color1, color2, color3)

// working with filesystems
// console.log(process.env) // give object
console.log(process.argv) // give array
// console.log(process.argv[1])

const command = process.argv[2]

if(command === 'add'){
	console.log("Adding notes")
}else if(command === 'remove'){
	console.log("Removing notes")
}