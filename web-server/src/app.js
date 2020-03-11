const path = require("path")

const express = require("express")

// console.log(__dirname)
// console.log(path.join(__dirname, ".."))
// console.log(path.join(__dirname, "../public"))

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.use(express.static(publicDirectoryPath))

// app.get("", (req, res) => {
// 	res.render('index', {
// 		title: "Weather App",
// 		name: "Andrew Mead"
// 	})
// })

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


app.get("/products", (req, res) => {
	if(!req.query.search){
		return 	res.send({
			error: "error is there" 
		})
	}
	res.send({
		products: []
	})
})

app.get("/weather", (req, res) => {
	if(!req.query.address){
		res.send({
			error: "there is error string"
		})
	}
	
	res.send({
		firstName: "srilakshmi",
		lastName: "Gulla",
		address: req.query.address
	})
})

app.listen(8080, () => {
	console.log("Server is up on port 8080")
})