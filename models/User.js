const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	username: String,
	password: {
		type:String,
		set(val){
			return require('bcrypt').hashSync(val,10)//加密等级,密码需要加密后再存储
		}
	}
})

module.exports =  mongoose.model('User', schema)

