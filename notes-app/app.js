const fs = require('fs')
const add = require("./utils")
const notes = require("./notes")
const validator = require('validator')

fs.writeFileSync("notes.txt", "Welcome to nodejs course.")

fs.appendFileSync("notes.txt", " i am srilakshmi")

const sum = add(4, -2)
// console.log(sum)

const getNote = notes("Your notes....")
console.log(getNote)

//check string is correct or not
const string = validator.isEmail("srilakshmigulla576@gmail.com")
const url = validator.isURL("www.google.com")
console.log(string)
console.log(url)