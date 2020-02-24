const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    acm: {type:String},
    maitKey: {type:String},
    miniWallkey: {type:String},
    title: {type:String}
})

module.exports = mongoose.model('Category',schema)
