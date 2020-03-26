//CRUD create read update delete

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectId()
console.log(id) // show id
console.log(id.getTimestamp()) // show id time
console.log(id.id) // show id in buffer
console.log(id.id.length) // show id length
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if(error) {
		return console.log("Unable to connect to database")
	}

	console.log("Connected correctly")

	const db = client.db(databaseName)

	//////////////////------------INSERT DATA-------------
	// db.collection('user').insertOne({
	// 	name: "arya stark",
	// 	age: 29
	// }, (error, result) => {
	// 	if(error) {
	// 		return console.log("Unable to insert user")
	// 	}
		
	// 	console.log("----------", result.ops)
	// })

	// db.collection('user').insertMany([{
	// 	name: "srinivas",
	// 	age: 60
	// },{
	// 	name: "srini",
	// 	age: 89
	// }], (error, result) => {
	// 	if(error){
	// 		return console.log("Unable to insert user")
	// 	}

	// 	console.log(result.ops)
	// })

	// db.collection('tasks').insertMany([{
	// 	description: "Hello world",
	// 	completed: true
	// },{
	// 	description: "Bye world",
	// 	completed: true
	// },{
	// 	description: " ",
	// 	completed: false
	// }], (error, result) => {
	// 	if(error){
	// 		return console.log("Unable to insert data")
	// 	}

	// 	console.log(result.ops)
	// })

	/////////////////////----------------GET DATA----------
	db.collection('user').findOne({ name: "srini", age: 89}, (error, user) => {
		if(error){
			return console.log("Unable to fetch")
		}

		console.log("---------",user)
	})
})