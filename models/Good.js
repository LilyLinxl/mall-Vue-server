const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
  acm: {type:String},
  cfav: {type:String},
  clientUrl: {type:String},
  cparam: {type:String},
  iid: {type:String},
  itemMarks: {type:String},
  itemType: {type:Number},
  leftbottom_taglist: {type:Array},
  lefttop_taglist: {type:Array},
  link: {type:String},
  orgPrice: {type:String},
  popularStar: {type:Number},
  price: {type:String},
  props: {type:Array},
  ptpC: {type:String},
  sale: {type:String},
  shopId: {type:String},
  show: {type:Object},
  showLarge: {type:Object},
  title: {type:String},
  titleTags: {type:String},
  type: {type:Number},
  topType: {type:String}
})

module.exports = mongoose.model('Good',schema)