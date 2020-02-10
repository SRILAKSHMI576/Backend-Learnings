const request = require("request")

const url = "https://api.darksky.net/forecast/a03621f5993565f5f8037090936ab5b2/37.8267,-122.4233?units=si"

request({url: url, json: true}, (error, response) => {
	console.log(response.body.currently)
	console.log("It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
})