const https = require("https")

const url = "https://api.darksky.net/forecast/a03621f5993565f5f8037090936ab5b2/40, 30"

const request = https.request(url, (response) => {
	let data = "" 

	response.on("data", (chunk) => {
		data = data + chunk.toString()
	})
	
	response.on("end", () => {
		const body = JSON.parse(data)
		console.log(body)
	})
})

request.on("error", (error) => {
	console.log("an Error", error)
})
request.end()