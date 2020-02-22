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
function findByIndex(serial_number){
	axios.get(url)
	.then(res => {
		n = res.data.length - 1
		for(index=0; index<=n; index++){
			if(res.data[index].capsule_serial === serial_number){
				console.log(res.data[index])
			}
		}
		
	})
	.catch(err => {
		console.log("Err",err)
	})
}	
findByIndex("C101")
findByIndex("C105")
findByIndex("C112")

// console.log("helloo", res.data[index].capsule_serial === num)
// 		console.log("bye", res.data[index])	
// //Search Based on Missions
// function findByMissions(index){
// 	axios.get(url)
// .then(res => {
// 	console.log(res.data[index].missions)
// })
// .catch(err => {
// 	console.log("Err",err)
// })
// }
// findByMissions(1)
// findByMissions(3)
// findByMissions(10)

//retuns based on Range

