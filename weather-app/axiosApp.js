const axios = require("axios")

function getData() {
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JpbGFrc2htaWd1bGxhIiwiYSI6ImNrNmdiOHQ5NTJodjIzZXFmdWlicGJndTQifQ.TJyl2j3e-zCSuTCMUvv86A"
	axios.get(url)
	.then(function (response) {
		console.log("-----", response.data.features[0]);
	})
	.catch(function (error) {
		console.log(error);
	})
}
getData()