const router = require('koa-router')()

router.prefix('/stu')
//自定义模块不加".js"
const stuModel = require('../models/stu')
router.get('/', async function (ctx, next) {
   
    var data = await stuModel.mysql("select * from stu")     
    await ctx.render('index',{
      stus: data
    });
})

router.get('/create', function (ctx, next) {
  ctx.render('post')
 
})

router.get('/docreate', async function (ctx, next) {
    //ctx.body = 'this is docreate page'
    //接收数据
    var getData = ctx.query
    //过滤

    //入库
    var data = await stuModel.mysql(`insert into stu 
          values
          (null, '${getData.name}', '${getData.age}', '${getData.sex}', default)`
          ) 
    //判断跳转
    ctx.response.redirect('/stu')
  })

module.exports = router
