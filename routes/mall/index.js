module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    const Good = require('../../models/Good')
    const HomeInfo = require('../../models/HomeInfo')
    const Detail = require('../../models/Detail')
    const Recommend = require('../../models/Recommend')
    const Category = require('../../models/Category')
    const SubCategory = require('../../models/SubCategory')
    const CategoryDetail = require('../../models/CategoryDetail')
    const User = require('../../models/User')
    const assert = require('http-assert')

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
    router.get('/category',async (req,res)=>{
        const items = await Category.find()
        res.send(items)
    })
    router.get('/subcategory/:maitKey',async (req,res)=>{
        const items = await SubCategory.find({"maitKey":req.params.maitKey})
        res.send(items)
    })
    router.get('/categorydetail/:miniWallkey/:type',async (req,res)=>{
        const items = await CategoryDetail.find({"miniWallkey":req.params.miniWallkey,"type":req.params.type})
        res.send(items)
    })
    //登录
    app.post('/mall/api/login',async (req,res)=> {
        const {username,password} = req.body
        const user = await (await (await User.findOne({username})))
        if(!user){
            const model = await User.create(req.body)
            res.send('success register')
        }
        res.send('success login')
    })
    
    app.use(async(err,req,res,next) => {
        res.status(err.statusCode||401).send({
            message:err.message
        })
    })
    app.use('/mall/api',router)//将子路由挂载上去
}
