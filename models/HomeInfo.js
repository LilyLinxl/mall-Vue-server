const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    banner:{type:Array},
    recommend:{type:Array}
})

module.exports = mongoose.model('HomeInfo',schema)
