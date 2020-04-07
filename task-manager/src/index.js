const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
// 	if(req.method === "GET"){
// 		res.send("GET requests are disabled")
// 	}else{
// 		next()
// 	}
	
// })

// app.use((req, res, next) => {
// 	res.status(503).send("Site is currently down. Check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get("/test", (req, res) => {
// 	res.send("This is from my other router")
// })
// app.use(router)


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

	const token = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {expiresIn: "7 days"})
	console.log("token", token)

	const data = jwt.verify(token, "thisismynewcourse")
	console.log("data", data)
}

myFunction()
