const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//create user data
app.post('/users', (req, res) => {
	const user = new User(req.body)

	user.save().then(() => {
		res.send(user)
		res.status(202)
	}).catch((e) => {
		res.status(404).send(e)
	})
})
//create task data
app.post("/tasks", (req, res) => {
	const task = new Task(req.body)

	task.save().then(() => {
		res.send(task)
	}).catch((e) => {
		res.status(404).send(e)
	})
})

app.listen(port, () => {
	console.log("Server started")
})