const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    iid:{type:String},
    topImages:{type:Array},
    goods:{type:Object},
    shop:{type:Object},
    detail:{type:Object},
    param:{type:Object},
    comment:{type:Object}
})

module.exports = mongoose.model('Detail',schema)
