const fs = require("fs")

// const book = {
// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday"
// }

// const bookJson = JSON.stringify(book)
// console.log(bookJson)

// const parsedData = JSON.parse(bookJson)
// console.log(parsedData.title)

// fs.writeFileSync("1-json.json", bookJson)

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.author)

//Task

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
console.log(user)

user.name = "srilakshmi"
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync("1-json.json", userJSON)
