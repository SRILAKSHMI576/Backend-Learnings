const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// const router = new express.Router()
// router.get("/test", (req, res) => {
// 	res.send("This is from my other router")
// })
// app.use(router)

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log("Server started")
})


// const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const myFunction = async () => {
	// const password = "Red12345"
	// const hashedPassword = await bcrypt.hash(password, 8)

	// console.log(password)
	// console.log(hashedPassword)

	// const isMatch = await bcrypt.compare("Red12345", hashedPassword)
	// console.log(isMatch)

	const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {expiresIn: "7 months"})
	console.log("token", token)

	const data = jwt.verify(token, "thisismynewcourse")
	console.log("data", data)
}

myFunction()