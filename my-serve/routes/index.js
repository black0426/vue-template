var express = require('express')
var router = express.Router()
var userModel = require('../db/models/UserModel')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/auth', function (req, res, next) {
  res.send('welcome to auth')
})

router.post('/reg', function (req, res) {
  console.log(req.body) //接收前端通过post提交的数据
})

router.post('/reese', function (req, res) {
  console.log(req.body)
  let { user, pwd } = req.body
  //使用mongoose提供的方法，将user与pwd存储至数据库
  new userModel({
    //一条具体的数据
    user: user,
    pwd: pwd
  })
    .save()
    .then(() => {
      res.send({ code: 1, msg: '注册成功' })
    })
})
module.exports = router
