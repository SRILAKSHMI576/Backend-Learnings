require("../src/db/mongoose")
const User = require("../src/models/user")

User.findByIdAndUpdate("5e8181cfb8ec174a687c79e6", { age: 1 }).then((user) => {
	console.log(user)
	return User.countDocuments({age: 1})
}).then((result) => {
	console.log(result)
}).catch((e) => {
	console.log(e)
})