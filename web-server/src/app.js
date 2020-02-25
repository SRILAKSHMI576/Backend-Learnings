const path = require("path")

const express = require("express")

// console.log(__dirname)
// console.log(path.join(__dirname, ".."))
// console.log(path.join(__dirname, "../public"))

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
	res.send("<h1>Hello world</h1>")
})

// app.get("/help", (req, res) => {
// 	res.send([{
// 		name: "srilakshmi",
// 	}, {
// 		name: "sri"
// 	}
// 	])
// })

// app.get("/about", (req, res) => {
// 	res.send("<title>Hello world </title>")
// })

app.get("/weather", (req, res) => {
	res.send({
		firstName: "srilakshmi",
		lastName: "Gulla"
	})
})

app.listen(8080, () => {
	console.log("Server is up on port 8080")
})