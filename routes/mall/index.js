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
    const jwt = require('jsonwebtoken')
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
        // 1.根据用户名找用户
        const user = await (await User.findOne({username}).select('+password'))
        assert(user,422,{message:'用户不存在'})
        // 2.校验密码
        const isValid = require('bcrypt').compareSync(password,user.password)
        assert(isValid,422,'密码错误')
        // 3.返回token
        const token = jwt.sign({id:user._id},app.get('secret'))
        res.send(
            {
                token:token,
                username:username,
                id:user._id
            })
    })
    app.post('/mall/api/register',async (req,res)=>{
        const {username,password} = req.body
        const user = await User.findOne({username})
        if(!user){
            const model = await User.create(req.body)
            res.send({
                code:200,
                msg:'注册成功'
            })
        }else{
            res.send({
                code:422,
                msg:'该用户名已存在'
            })
        }
    })
    
    app.use(async(err,req,res,next) => {
        res.status(err.statusCode||401).send({
            message:err.message
        })
    })
    app.use('/mall/api',router)//将子路由挂载上去
}
