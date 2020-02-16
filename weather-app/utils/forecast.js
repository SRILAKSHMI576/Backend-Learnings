const request = require('request')

const forecast = (latitude,longitude, callback) => {
const url = "https://api.darksky.net/forecast/a03621f5993565f5f8037090936ab5b2/" + latitude + "," + longitude

request({url :url, json: true}, (error, response) => {
	if(error) {
		callback("ubable to detect")
	}else if{
		callback("uabler rtoertiengkjng")
	}else{
		callback()
	}
})

}

module.exports = forecast