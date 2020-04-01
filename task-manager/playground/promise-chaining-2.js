require("../src/db/mongoose")
const Task = require("../src/models/task")

Task.findByIdAndDelete("5e7b0d3daf00c12701f075dc").then((task) => {
	console.log(task)
	return Task.countDocuments({completed: false})
}).then((result) => {
	console.log(result)
}).catch((e) => {
	console.log(e)
})