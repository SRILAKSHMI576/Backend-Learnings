const validator = require("validator")

var notes = require("./notes.js")

var para = notes()

console.log(para)

console.log(validator.isEmail("srilakshmigulla576@gmail.com"))