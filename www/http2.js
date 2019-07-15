//1 引入模块
var http = require('http');
//2 创建web服务器
var server = http.createServer();
//3 监听请求          request  response
server.on('request',function(req, res){
    console.log('收到用户请求, 请求地址： ' +  req.url);

    //判断请求地址
    if(req.url == '/'){
        $msg = 'this is index'
    }else if(req.url == '/login'){
        $msg = 'this is login'
    }else{
        $msg = '404'
    }


    //注意：有请求就应该有响应
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write($msg);
    res.end();
})

//4 启动服务
server.listen(8080, function(){
    console.log('服务器启动成功，访问： http://localhost:8080');
})


