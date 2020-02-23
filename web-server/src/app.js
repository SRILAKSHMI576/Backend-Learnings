const express = require("express")

const app = express()

app.get("", (req, res) => {
	res.send("<h1>Hello world</h1>")
})

app.get("/help", (req, res) => {
	res.send("Help page")
})

app.get("/about", (req, res) => {
	res.send("Page title")
})

app.get("/weather", (req, res) => {
	res.send("Weather app")
})

app.listen(8080, () => {
	console.log("Server is up on port 8080")
})