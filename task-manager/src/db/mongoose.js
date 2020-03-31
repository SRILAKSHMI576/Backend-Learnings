const mongoose = require("mongoose")
const validator = require("validator")

//Connect node and db using mongoose
mongoose.connect('mongodb://127.0.0.1:27017/task-manager', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

///create model
const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if(!validator.isEmail(value)){
				throw new Error("Email is invalid")
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if(value < 0) {
				throw new Error("Age must be a positive number")
			}
		}
	}
})

//save data to db
const me = new User({
	name: "    Laddu   ",
	email: 'sri@gmail.com   '
})

me.save().then(() => {
	console.log(me)
}).catch((error) => {
	console.log("Error!", error)
})

//create another mondel
const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
})

// const task = new Task({
// 	description: "HELOOOOO WORLDDDDDD",
// 	completed: false
// })

// task.save().then(() => {
// 	console.log(task)
// }).catch((error) => {
// 	console.log(error)
// })