// const doWorkPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve([6, 7, 8])
// 		reject("Things went wrong")
// 	}, 2000)
// })

// doWorkPromise.then((result) => {
// 	console.log("Sucess!", result)
// }).catch(() => {
// 	console.log("Error!", error)
// })

const addition = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b)
		}, 2000)
	})
}

// addition(4, 5).then((sum) => {
// 	console.log(sum)

// 	addition(sum, 5).then((sum2) => {
// 		console.log(sum2)
// 	}).catch((e) => {
// 		console.log(e)
// 	})
// }).catch((e) => {
// 	console.log(e)
// })

addition(1, 1).then((sum) => {
	console.log(sum)
	return addition(sum, 4)
}).then((sum2) => {
	console.log(sum2)
}).catch((e) => {
	console.log(e)
})