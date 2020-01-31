const fs = require("fs")

// 1................
// const book = {
// 	title: "Ego is the Enemy",
// 	author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// const bookWrite = fs.writeFileSync("1-json.json", bookJSON)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)

// const dataBuffer = fs.readFileSync("1-json.json")

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//2 ..............

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "srilakshmi"
user.age = 40

const userJSON = JSON.stringify(user)
fs.writeFileSync("1-json.json", userJSON)
