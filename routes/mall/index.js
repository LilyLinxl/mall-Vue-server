module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Banner = require('../../models/Banner')
    const Good = require('../../models/Good')
    const Recommend = require('../../models/Recommend')


    router.get('/home/banner',async (req,res)=>{
        const items = await Banner.find().limit(4)
        res.send(items)
    })
    router.get('/home/recommend',async (req,res)=>{
        const items = await Recommend.find().limit(4)
        res.send(items)
    })
    router.get('/home/good/:topType/:page',async (req,res)=>{
        const items = await Good.find({"topType":req.params.topType}).skip(10*(req.params.page-1)).limit(10)
        res.send(items)
    })
    app.use('/mall/api',router)//将子路由挂载上去
}