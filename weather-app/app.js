const request = require("request")

const url = "https://api.darksky.net/forecast/a03621f5993565f5f8037090936ab5b2/37.8267,-122.4233"

request({url: url}, (error, response) => {
	const data = JSON.parse(response.body)
	console.log(data.currently)
})