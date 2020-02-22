module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Good = require('../../models/Good')
    const HomeInfo = require('../../models/HomeInfo')
    const Detail = require('../../models/Detail')
    const Recommend = require('../../models/Recommend')

    // const Banner = require('../../models/Banner')
    // const Activity = require('../../models/Activity')
  
    // router.get('/home/banner',async (req,res)=>{
    //     const items = await Banner.find().limit(4)
    //     res.send(items)
    // })
    // router.get('/home/activity',async (req,res)=>{
    //     const items = await Activity.find().limit(4)
    //     res.send(items)
    // })
    router.get('/homeInfo',async (req,res)=>{
        const items = await HomeInfo.find()
        res.send(items)
    })
    router.get('/home/good/:topType/:page',async (req,res)=>{
        const items = await Good.find({"topType":req.params.topType}).skip(10*(req.params.page-1)).limit(10)
        res.send(items)
    })
    router.get('/recommend',async (req,res)=>{
        const items = await Recommend.find()
        res.send(items)
    })
    router.get('/detail/:iid',async (req,res)=>{
        const items = await Detail.findOne({"iid":req.params.iid})
        res.send(items)
    })
    app.use('/mall/api',router)//将子路由挂载上去
}
