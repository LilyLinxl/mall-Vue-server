const mongoose = require('mongoose')

const schema = new mongoose.Schema({//模型
    acm: {type:String},
    cfav: {type:Number},
    discount: {type:Number},
    discountPrice: {type:String},
    image: {type:String},
    isShelf: {type:Number},
    itemLikes: {type:Number},
    itemSale: {type:Number},
    item_h5_url: {type:String},
    item_id: {type:String},
    item_url: {type:String},
    price: {type:String},
    shop_id: {type:String},
    title: {type:String},
    tradeItemId:{type:Number}
})

module.exports = mongoose.model('Recommend',schema)
