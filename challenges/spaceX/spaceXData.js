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
		for(let index=0; index<=n; index++){
			if(res.data[index].capsule_serial === serial_number){
				console.log(res.data[index])
			}
		}
		
	})
	.catch(err => {
		console.log("Err",err)
	})
}	
// findByIndex("C101")
// findByIndex("C105")
// findByIndex("C112")

// //Search Based on Missions     
function findByIndex(serial_number){
	axios.get(url)
	.then(res => {
		n = res.data.length - 1
		for(let index=0; index<=n; index++){
			for(let j=0; j<res.data[index].missions.length; j++){
				if(res.data[index].missions[j].name === serial_number){
					console.log(res.data[index])
				}
			}
		}
	})
	.catch(err => {
		console.log("Err",err)
	})
}	
findByIndex("COTS 1")
findByIndex("CRS-4")
findByIndex("CRS-11")

//retuns based on Range

