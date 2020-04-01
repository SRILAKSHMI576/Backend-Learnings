require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("5e7b0d3daf00c12701f075dc").then((task) => {
// 	console.log(task)
// 	return Task.countDocuments({completed: false})
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })


const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id)
	const count = await Task.countDocuments({ completed: false })
	return count
}

deleteTaskAndCount("5e82dffa62385b2b01959b2e").then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})