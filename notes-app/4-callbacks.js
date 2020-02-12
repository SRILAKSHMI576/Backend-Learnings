///1..............
// setTimeout(() => {
// 	console.log("Two seconds are up")
// }, 2000)

// const names = ["Andrew", "Jen", "Jess"]
// const shortNames = names.filter((name) => {
// 	return name.length <= 4 
// })
// console.log(shortNames)

// const geocode = (address, callback) => {
// 	setTimeout(() => {
// 		const data = {
// 			latitude: 0,
// 			longitude: 0
// 		}
// 		callback(data)
// 	}, 2000)
// }

// geocode("Philadelphia", (data) =>{
// 	console.log(data)
// })


///2........

const add = (a,b, callback) => {
	setTimeout(() => {
		callback(a + b)
	}, 2000)
}

add(4, 1, (sum) => {
	console.log(sum)
})