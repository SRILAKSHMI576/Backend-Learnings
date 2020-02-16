const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

request({url: url, json: true}, (error, response) => {
	console.log(response.body.currently)
	if(error){ //error at low level
		console.log("Unable to connect to weather app")
	}else if(response.body.error){ // error at input level
		console.log("unable to find location")
	}
	else{ //get response
 	console.log(response.body.daily.data[0].summary +" It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain.")
	}
})
// geocode("Boston", (error, data) => {
// 	console.log("Error", error)
// 	console.log("Data", data)
// })

forecast("37.8267,-122.4233", (error, data) => {
	console.log("Error", error)
	console.log("Data", data)
})