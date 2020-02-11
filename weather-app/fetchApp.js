const fetch = require('node-fetch')

function getData() {
	const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3JpbGFrc2htaWd1bGxhIiwiYSI6ImNrNmdiOHQ5NTJodjIzZXFmdWlicGJndTQifQ.TJyl2j3e-zCSuTCMUvv86A"	
	fetch(url)
	.then(res => res.json())
	.then(json => console.log(json.features[0].text));
	
}
getData()