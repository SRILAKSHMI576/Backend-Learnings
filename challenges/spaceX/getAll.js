const axios  = require("axios")

const url = "https://api.spacexdata.com/v3/capsules"

function getAll(){
		axios.get(url)
	.then(res => {
		console.log("res",res)
	})
	.catch(err => {
		console.log("Err",err)
	})
}
getAll()