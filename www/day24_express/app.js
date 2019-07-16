//引入模块
var express = require('express')
//创建web服务器
var app = express()
//路由
app.get('/', function(req, res) {
    //end()  响应字符串         乱码
    //send() 响应字符串         自动识别
    //render() 响应字符串       自定识别只能打开指定文件字符串并响应，必须配合模板使用
    //res.end("g哥哥来抓我啊<a href='http://nn.com'> 点击进入我的世界 </a>")
    res.end("g哥哥来抓我啊<a href='http://nn.com'> 点击进入我的世界 </a>")
})
//启动服务
app.listen(8080, function(){
    console.log("启动成功，访问http://localhost：8080");
})