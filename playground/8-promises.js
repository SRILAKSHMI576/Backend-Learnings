const doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve([6, 7, 8])
		reject("Things went wrong")
	}, 2000)
})

doWorkPromise.then((result) => {
	console.log("Sucess!", result)
}).catch(() => {
	console.log("Error!", error)
})