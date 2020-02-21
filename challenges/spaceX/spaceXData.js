const axios  = require("axios")

const url = "https://api.spacexdata.com/v3/capsules"

//To get all Data
function getAll(){
		axios.get(url)
	.then(res => {
		console.log("res",res)
	})
	.catch(err => {
		console.log("Err",err)
	})
}
// getAll()

//Search By Index
function findByIndex(index){
		axios.get(url)
	.then(res => {
		console.log("res",res.data[index])
	})
	.catch(err => {
		console.log("Err",err)
	})
	}
// findByIndex(1)
// findByIndex(3)
// findByIndex(10)

//Search Based on Missions
function findByMissions(index){
	axios.get(url)
.then(res => {
	console.log(res.data[index].missions)
})
.catch(err => {
	console.log("Err",err)
})
}
findByMissions(1)
findByMissions(3)
findByMissions(10)