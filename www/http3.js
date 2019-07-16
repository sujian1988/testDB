//1 引入模块
var http = require('http');
//2 创建web服务器
var server = http.createServer();
//3 监听请求          request  response
server.on('request',function(req, res){
    //console.log(req);
    // console.log(req.headers);
    // console.log(req.rawHeaders);
    // console.log(req.httpVerson);
    //** console.log(req.method);
    //** console.log(req.url);  

    //注意：有请求就应该有响应
    //** res.statusCode = 404;
    //** res.statusMessage = 'Not Found';

    res.writeHeader(404, 'NotFound2',{
        'Content-Type': 'text/html;charset=utf-8'
    })

    //res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.write('打印request对象');
    res.end();
})

//4 启动服务
server.listen(8080, function(){
    console.log('服务器启动成功，访问： http://localhost:8080');
})


