//1 引入模块
    var express = require('express')
//2 获取数据模块
var fs = require('fs')
//引入mysql模块
var mysql = require('mysql')

// 创建app对象
var app = express()

//创建mysql实例
var connection = mysql.createConnection({      
    host:'39.96.18.249',
    port:'3306',
    user:'xb2',
    password:'Sj86624932.',
    database:'dev_xwplay'
});

//连接数据库
connection.connect(function(err){
    if(err){
        console.log("mysql数据库连接失败！" + err)
        reuturn;
    }
    console.log("mysql数据库连接成功！")
});

var sql = 'SELECT * FROM users';
var str = " ";
var mResult = "";

connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    str = JSON.stringify(result);
    mResult = result; //result 就是返回的json类型
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    //console.log(result);   //数据库查询结果返回到result中
    console.log(str);
});

app.get('/',function (req,res) {
    res.send(str);  //服务器响应请求
});

//关闭数据库连接
connection.end(function(err){
    if(err){
        console.log("mysql数据库断开连接失败！")
        return;
    }
    console.log("mysql数据库断开连接成功！")
});

app.listen(3000,function () {    ////监听3000端口
    console.log('Server running at 3000 port');
});


//3 配置框架
app.engine('html', require('express-art-template'))
//第一个参数是路径前面不要加点
app.use('/public', express.static('public'))

//5 启动服务
app.listen(8080, function(){
    console.log('启动成功，访问http://localhost:8080')
})


//********************************************设置接口名称，并返回想要的数据或者页面********************************************************* */
//4 路由   正式项目 路由应该单独新建一个文件夹管理
app.get('/stu', function(req, res){
    //学生列表
    //获取db.jsons数据
    // fs.readFile('./db.json', 'utf8', function(err, data){
    //     if(err) res.send('server error.')
    //     var data = JSON.parse(data)  //将字符串转换成json对象   
    //     //console.log(data)  
    //     //加载视图 这里需要的是json对象
    //     res.render('index.html', {
    //         msgs: data.stus    
    //     })
    // })

    //从数据库获取
    //加载视图 这里需要的是json对象
    res.render('index.html', {
        msgs: mResult    
    })

})

app.get('/stu/create', function(req, res){
    
    //学生添加页
    
    //加载web视图
    res.render('post.html')

})
