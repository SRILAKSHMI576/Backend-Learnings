require("../src/db/mongoose")
const User = require("../src/models/user")

// User.findByIdAndUpdate("5e8181cfb8ec174a687c79e6", { age: 1 }).then((user) => {
// 	console.log(user)
// 	return User.countDocuments({age: 1})
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
	const user = User.findByIdAndUpdate(id, { age })
	const count = User.countDocuments({ age })
	return count 
}

updateAgeAndCount('5e8181cfb8ec174a687c79e6', 2).then((count) => {
	console.log(count)
}).catch((e) => {
	console.log(e)
})