const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	image: String,
  title: String,
	title: String,
  price:Number,
  iid:String
})

module.exports =  mongoose.model('Cart', schema)
