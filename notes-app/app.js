const validator = require("validator")
const yargs = require("yargs")
const chalk = require("chalk")


yargs.command({
	command: "add",
	describe: "Add a new note",
	handler: function () {
		console.log("Adding a new movie")
	}
})

console.log(yargs.argv)