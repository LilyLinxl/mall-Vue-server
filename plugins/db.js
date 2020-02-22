module.exports = app=>{
    const mongoose = require("mongoose")
    mongoose.connect("mongodb://127.0.0.1:27017/mall",{//连接数据库
        useNewUrlParser:true,
        useUnifiedTopology: true 
    })
    var db = mongoose.connection
    db.on('error',console.error.bind(console,'连接错误:'))
    db.once('open',(callback)=>{
        console.log('连接成功')
    })
}
