//CRUD create read update delete

const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
	if(error) {
		return console.log("Unable to connect to database")
	}

	console.log("Connected correctly")

	const db = client.db(databaseName)

	// db.collection('user').insertOne({
	// 	name: "srilakshmi",
	// 	age: 23
	// }, (error, result) => {
	// 	if(error) {
	// 		return console.log("Unable to insert user")
	// 	}
		
	// 	console.log(result.ops)
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

	db.collection('tasks').insertMany([{
		description: "Hello world",
		completed: true
	},{
		description: "Bye world",
		completed: true
	},{
		description: " ",
		completed: false
	}], (error, result) => {
		if(error){
			return console.log("Unable to insert data")
		}

		console.log(result.ops)
	})
})