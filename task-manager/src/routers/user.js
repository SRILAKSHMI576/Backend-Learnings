const express = require("express")
const User = require("../models/user")
const auth = require("../middleware/auth")
const router = new express.Router()

//Read users
// app.get("/users", (req, res) => {
// 	User.find({}).then((users) => {
// 		res.send(users)
// 	}).catch((e) => {
// 		res.status(500).send(e)
// 	})
// })

// router.get("/users", auth, async (req, res) => {
// 	try{
// 		const users = await User.find({})
// 		res.status(200).send(users)
// 	} catch (e) {
// 		res.status(404).send(e)
// 	}
// })

router.get("/users/me", auth, async (req, res) => {
	res.send(req.user)
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

// router.get("/user/:id", async (req, res) => {
// 	const _id = req.params.id

// 	try{
// 		const user = await User.findById(_id)

// 		if(!user) {
// 			return res.status(404).send()
// 		}

// 		res.send(user)
// 	} catch (e) {
// 		res.status(500).send()
// 	}
// })

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

router.post("/users", async (req, res) => {
	const user = new User(req.body)

	try{
		await user.save()
			const token = await user.generateAuthToken()
			res.status(201).send({ user, token })
			// res.status(201).send(user)
		} catch(e) {
			res.status(400).send(e)
		}
})

//Login with user
router.post("/users/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password)
		const token = await user.generateAuthToken()
		console.log("user", user)
		console.log("token", token)
		res.send({user, token})

	} catch (e) {
		console.log(e)
		res.status(400).send(e)
	}
})

//logout user
router.post("/users/logout", auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token
		})
		await req.user.save()

		res.send()
	} catch (e) {
		res.status(500).send(e)
	}
 })

 //logout all users
 router.post("/users/logoutAll", auth, async (req, res) => {
	 try {
		 req.user.tokens = []
		 await req.user.save()
		 res.send()
	 } catch (e) {
		 res.status(500).send()
	 }
 })

//Update user
// router.patch("/users/:id", async(req, res) => {
// 	const _id = req.params.id
// 	const body = req.body

// 	const updates = Object.keys(req.body)
// 	console.log("updates", updates)
// 	const allowedUpdates = ['name', 'email', 'password', 'age']
// 	console.log("allwoowdd", allowedUpdates)
// 	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

// 	if(!isValidOperation) {
// 		return res.status(400).send({error: "Invalid updates!"})
// 	}

// 	try {

// 		const user = await User.findById(req.params.id)
// 		console.log("user",user)

// 		updates.forEach((update) => user[update] = req.body[update])

// 		await user.save()
// 		// const user = await User.findByIdAndUpdate(_id, body, { new: true, runValidators: true })
		
// 		if(!user){
// 			return res.status(404).send()
// 		}

// 		res.send(user)

// 	} catch (e) {
// 		res.status(400)
// 	}
// })

//update login profile
router.patch("/users/me", auth, async (req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['name', 'email', 'password', 'age']
	const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
	
	if(!isValidOperation) {
		return res.status(400).send({error: "Invalid updates!"})
	}

	try {
		updates.forEach((update) => req.user[update] = req.body[update])
		await req.user.save()
		res.send(req.user)

	} catch (e) {
		res.status(400).send(e)
	}
})

//Delete user
// router.delete("/users/:id", async(req, res) => {
// 	const _id = req.params.id

// 	try {
// 		const user = await User.findByIdAndDelete(_id)

// 		if(!user){
// 			return res.status(404).send()
// 		}

// 		res.send(user)
// 	} catch (e) {
// 		res.status(404).send(e)
// 	}
// })

//delete login profile
router.delete("/users/me", auth, async (req, res) => {
	try {
		await req.user.remove()
		res.send(req.user)
	} catch (e) {
		res.status(404).send(e)
	}
})

module.exports = router