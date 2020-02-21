const axios  = require("axios")

const url = "https://api.spacexdata.com/v3/capsules"

function getAll(index){
		axios.get(url)
	.then(res => {
		console.log("res",res.data[index])
	})
	.catch(err => {
		console.log("Err",err)
	})
	}
getAll(1)