setTimeout(() => {
	console.log("hiiii")
}, 2000)

const names = ["sri", "Srinivas", "srilakshmi"]
const result = names.filter(name => {
	return name.length >= 4
})
//console.log(result)

const geoCode = (address, callback) => {
	setTimeout(() => {
		const data = {
			longitude: 0,
			latitude: 0
		}
		callback(data)
	}, 2000)
}
geoCode("phosvdgn", (data) => {
	//console.log(data)
})

const addition = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b)
	},1000)	
}
addition(4, 1, (sum) => {
	console.log(sum)
})