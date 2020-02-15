const request = require("request")
const geocode = require("./utils/geocode")

const url = "https://api.darksky.net/forecast/a03621f5993565f5f8037090936ab5b2/37.8267,-122.4233"

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

const url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoic3JpbGFrc2htaWd1bGxhIiwiYSI6ImNrNmdiOHQ5NTJodjIzZXFmdWlicGJndTQifQ.TJyl2j3e-zCSuTCMUvv86A"

request({url: url1, json: true}, (error, response) => {
	if(error){
		console.log("Unable to connect to location services")
	}else if(response.body.features.length === 0){
		console.log("Unable to find location. Try another search")
	}
	else{
		const latitude = response.body.features[0].center[0]
		const longitude = response.body.features[0].center[1]
		   console.log(latitude, longitude)
	}
})


geocode("Boston", (error, data) => {
	console.log("Error", error)
	console.log("Data", data)
})