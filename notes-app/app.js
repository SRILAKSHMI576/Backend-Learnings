const validator = require("validator")
const chalk = require("chalk")

const command = process.argv[2]

if (command === "add") {
	console.log("notes added!")
} else if (command === "remove") {
	console.log("notes removed!")
}

