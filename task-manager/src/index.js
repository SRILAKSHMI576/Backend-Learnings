const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

//Read users
// app.get("/users", (req, res) => {
// 	User.find({}).then((users) => {
// 		res.send(users)
// 	}).catch((e) => {
// 		res.status(500).send(e)
// 	})
// })

app.get("/users", async (req, res) => {
	try{
		const users = await User.find({})
		res.status(200).send(users)
	} catch (e) {
		res.status(404).send(e)
	}
})

//Read user
// app.get("/user/:id", (req, res) => {
// 	const _id = req.params.id
	
// 	User.findById({_id}).then((user) => {
// 		if(!user){
// 			return res.status(404).send()
// 		}

// 		res.send(user)
// 	}).catch((e) => {
// 		console.log(e)
// 	})
// })

app.get("/user/:id", async (req, res) => {
	const _id = req.params.id

	try{
		const user = await User.findById(_id)

		if(!user) {
			return res.status(404).send()
		}

		res.send(user)
	} catch (e) {
		res.status(500).send()
	}
})
//create user data
// app.post('/users', (req, res) => {
// 	const user = new User(req.body)

// 	user.save().then(() => {
// 		res.send(user)
// 		res.status(202)
// 	}).catch((e) => {
// 		res.status(404).send(e)
// 	})
// })

app.post("/users", async (req, res) => {
	const user = new User(req.body)

	try{
		await user.save()
			res.status(201).send(user)
		} catch(e) {
			console.log(e)
		}
})

//Update user
app.patch("/users/:id", async(req, res) => {
	const _id = req.params.id
	const body = req.body

	const updates = Object.keys(req.body)
	console.log("updates", updates)
	const allowedUpdates = ['name', 'email', 'password', 'age']
	console.log("allwoowdd", allowedUpdates)
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

	if(!isValidOperation) {
		return res.status(400).send({error: "Invalid updates!"})
	}

	try {
		const user = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true })
		
		if(!user){
			return res.status(404).send()
		}

		res.send(user)

	} catch (e) {
		res.status(400)
	}
})

//Read tasks
// app.get("/tasks", (req, res) => {
// 	Task.find({}).then((tasks) => {
// 		res.send(tasks)
// 	}).catch((e) => {
// 		res.status(500).send(e)
// 	})
// })

app.get("/tasks", async (req, res) => {
	try{
		const task = await Task.find({})
		res.send(task)
	} catch (e) {
		res.status(200).send(e)
	}
})

//Read single task by id
// app.get("/tasks/:id", (req, res) => {
// 	const _id = req.params.id
// 	Task.findById({_id}).then((task) => {
// 		if(!task){
// 			return res.status(404).send()
// 		}

// 		res.send(task)
// 	}).catch((e) => {
// 		res.status(500).send(e)
// 	})
// })

app.get("/tasks/:id", async (req, res) => {
	const _id = req.params.id

	try {
		const task = await Task.findById(_id)
		res.send(task)
	}catch (e) {
		res.send(e)
	}
})

//create task data
// app.post("/tasks", (req, res) => {
// 	const task = new Task(req.body)

// 	task.save().then(() => {
// 		res.send(task)
// 	}).catch((e) => {
// 		res.status(404).send(e)
// 	})
// })

app.post("/tasks", async (req, res) => {
	const task = new Task(req.body)

	try{
		await task.save()
			res.status(201).send(task)
		} catch(e) {
			console.log(e)
		}
})

//Update task
app.patch("/tasks/:id", async(req, res) => {
	const _id = req.params.id
	const task = req.body

	const updates = Object.keys(req.body)
	const allowedUpdates = ["description","completed"]
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

	if(!isValidOperation){
		return res.status(400).send({error: "Invalid updates"})
	}
	try {
		const updateTask = await Task.findByIdAndUpdate(_id, task, {new : true, runValidators: true})

		if(!updateTask){
			return res.status(404).send()
		}

		res.send(updateTask)

	} catch (e) {
		res.status(400).send(e)
	}
})

app.listen(port, () => {
	console.log("Server started")
})

