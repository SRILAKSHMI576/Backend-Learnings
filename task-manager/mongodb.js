//CRUD create read update delete

// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const {MongoClient, ObjectId } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectId()
// console.log(id) // show id
// console.log(id.getTimestamp()) // show id time
// console.log(id.id) // show id in buffer
// console.log(id.id.length) // show id length
// console.log(id.toHexString().length)

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
	// find user by data
	// db.collection('user').findOne({ name: "srini" }, (error, user) => {
	// 	if(error){
	// 		return console.log("Unable to fetch")
	// 	}

	// 	console.log("---------",user)
	// })

	//find user by unique id
	// db.collection('user').findOne({ _id: new ObjectId("5e7b0bab1f862d260d2df1cc") }, (error, user) => {
	// 	if(error){
	// 		return console.log("Unable to fetch")
	// 	}

	// 	console.log("---------",user)
	// })

	// db.collection('user').find({ age: 23 }).toArray((error, user) => {
	// 	console.log("user",user)
	// })

	// db.collection('user').find({ age: 23 }).count((error, user) => {
	// 	console.log("user",user)
	// })

	// db.collection('tasks').findOne({_id: new ObjectId("5e7b0d3daf00c12701f075dc") }, (error, tasks) => {
	// 	console.log(tasks)
	// })

	// db.collection('tasks').find({ completed: false }).toArray((error, task) => {
	// 	console.log(task)
	// })

	//////////////--------------Update docs----------------
	// const updatePromise = db.collection('user').updateOne({
	// 	_id: new ObjectId("5e7afccccc43751c301c17e4")
	// }, {
	// 	$set: {
	// 		name: 'Srinivas'
	// 	}
	// }).then((result) => {
	// 	console.log(result)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// const updatePromise = db.collection('user').updateOne({
	// 	_id: new ObjectId("5e7afccccc43751c301c17e4")
	// }, {
	// 	$inc: {
	// 		age: 1
	// 	}
	// }).then((result) => {
	// 	console.log(result)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	// db.collection('tasks').updateMany({
	// 	completed: true
	// }, {
	// 	$set:{
	// 		completed: false
	// 	}
	// }).then((result) => {
	// 	console.log(result.modifiedCount)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	///////////////----------------Delete documents-------------
	// db.collection('user').deleteMany({
	// 	age: 23
	// }).then((result) => {
	// 	console.log(result.deletedCount)
	// }).catch((error) => {
	// 	console.log(error)
	// })

	db.collection('tasks').deleteOne({
		description : "Hello world"
	}).then(() => {
		console.log("Success")
	}).catch(() => {
		console.log("Failed")
	})
})