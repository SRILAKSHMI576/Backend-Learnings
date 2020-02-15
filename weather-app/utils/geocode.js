const request = require("request")

const geocode = (address, calback) => {
	const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1Ijoic3JpbGFrc2htaWd1bGxhIiwiYSI6ImNrNmdiOHQ5NTJodjIzZXFmdWlicGJndTQifQ.TJyl2j3e-zCSuTCMUvv86A'
	
	request({url : url1, json:true}, (error, response) => {
		if(error) {
			callback("Unable to connect to location services", undefined)
		} else if(response.body.features.length === 0) {
			callback("unable to find location", undefined)
		}else {
			calback(undefined, {
				latitude: response.body.features[0].center[0],
				longitude: response.body.features[0].center[0],
				location: response.body.features[0].place_name
			})
		}
	})
}


module.exports = geocode