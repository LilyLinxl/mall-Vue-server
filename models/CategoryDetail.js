const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
  "acm": {type:String},
  "cfav": {type:Number},
  "clientUrl": {type:String},
  "hasSimilarity": {type:Boolean},
  "iid": {type:String},
  "img":{type:String},
  "itemMarks": {type:String},
  "link": {type:String},
  "orgPrice": {type:Number},
  "price": {type:Number},
  "props": {type:Array},
  "sale": {type:Number},
  "shopDsr": {type:Object},
  "shopSeller": {type:String},
  "similarityUrl": {type:String},
  "title": {type:String},
  "tradeItemId": {type:String},
  "type": {type:String},
  "miniWallkey": {type:String}
})

module.exports = mongoose.model('CategoryDetail',schema)
