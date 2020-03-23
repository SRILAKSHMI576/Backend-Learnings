const fs = require('fs')
const add = require("./utils")
const notes = require("./notes")

fs.writeFileSync("notes.txt", "Welcome to nodejs course.")

fs.appendFileSync("notes.txt", " i am srilakshmi")

const sum = add(4, -2)
// console.log(sum)

const getNote = notes("Your notes....")
console.log(getNote)