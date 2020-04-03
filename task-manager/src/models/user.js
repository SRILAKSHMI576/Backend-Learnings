//create model
const mongoose = require("mongoose")
const validator = require("validator")
const bcrpt = require("bcryptjs")

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if(!validator.isEmail(value)){
				throw new Error("Email is invalid")
			}
		}
	},
	password: {
		type: String,
		required: true,
		minlength: 7,
		trim: true,
		validate(value){
			if(value.toLowerCase().includes('password')){
				throw new Error("Password invalid")
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

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email })

	if(!user) {
		throw new Error("Unable to login")
	}

	const isMatch = await bcrpt.compare(password, user.password)

	if(!isMatch) {
		throw new Error("Fail to login")
	}

	return user
}

//Hash the plain text password before saving
userSchema.pre("save", async function(next) {
	const user = this

	if(user.isModified('password')) {
		user.password = await bcrpt.hash(user.password, 8)
		console.log(user.password)
	}

	next()
})

const User = mongoose.model('User', userSchema)

module.exports = User