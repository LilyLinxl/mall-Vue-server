const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    context: {type:Object},
    info: {type:Object},
    isEnd: {type:Boolean},
    list: {type:Array},
    nextPage:{type:Number},
    maitKey:{type:String}
})

module.exports = mongoose.model('SubCategory',schema)
