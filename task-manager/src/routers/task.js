const express = require("express")
const Task = require("../models/task")
const router = new express.Router()


//Read tasks
// app.get("/tasks", (req, res) => {
// 	Task.find({}).then((tasks) => {
// 		res.send(tasks)
// 	}).catch((e) => {
// 		res.status(500).send(e)
// 	})
// })

router.get("/tasks", async (req, res) => {
	try{
		const task = await Task.find({})
		res.send(task)
	} catch (e) {
		res.status(500).send(e)
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

router.get("/tasks/:id", async (req, res) => {
	const _id = req.params.id

	try {
		const task = await Task.findById(_id)

		if(!task) {
			return res.status(404).send()
		}

		res.send(task)
	}catch (e) {
		res.status(500).send()
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

router.post("/tasks", async (req, res) => {
	const task = new Task(req.body)

	try{
		await task.save()
			res.status(201).send(task)
		} catch(e) {
			res.status(400).send(e)
		}
})

//Update task
router.patch("/tasks/:id", async(req, res) => {
	// const _id = req.params.id
	// const task = req.body

	const updates = Object.keys(req.body)
	const allowedUpdates = ["description","completed"]
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

	if(!isValidOperation){
		return res.status(400).send({error: "Invalid updates"})
	}
	
	try {

		const task = await Task.findById(req.params.id)
	
		updates.forEach((update) => task[update] = req.body[update])
		await task.save()

		// const updateTask = await Task.findByIdAndUpdate(_id, task, {new : true, runValidators: true})

		if(!task){
			return res.status(404).send()
		}

		res.send(task)

	} catch (e) {
		res.status(400).send(e)
	}
})

//Delete task
router.delete("/tasks/:id", async(req, res) => {
	const _id = req.params.id

	try {
		const task = await Task.findByIdAndDelete(_id)

		if(!task){
			return res.status(404).send()
		}
		
		res.send(task)
	} catch (e) {
		res.status(404).send(e)
	}
})

module.exports = router