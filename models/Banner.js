const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    link:{type:String},
    image:{type:String}
})

module.exports = mongoose.model('Banner',schema)