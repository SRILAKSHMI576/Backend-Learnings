if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}

const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require("./routes/index")
const emoji = require("node-emoji")

app.set("view engine", 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use("/", indexRouter)
const pizza = emoji.get('pizza');
const smile = emoji.get('smile')
const message = ':tomato: :pizza: :tada: :partly_sunny: :sunny: :running: :smiley: :smiley_cat: :smile_cat: :dog2: :dog: :tiger: ';
// const emojiMessage = emoji.emojify(message);
const message1 = ':cat2: :cat: :watch: :watermelon: :water_buffalo: :arrow_up_down: :arrow_upper_left: :arrow_upper_right: :arrow_lower_right: :arrow_lower_left: :aries: '
// const emojiMessage1 = emoji.emojify(message1)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true
})
const db = mongoose.connection
db.once('open', () => console.log('Connected to mongoose'))

app.listen(port, (req, res) => {
	console.log("Server started!!!!", smile, pizza)
})