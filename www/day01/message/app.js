//1 引入模块
var fs = require('fs')
var url = require('url')
var http = require('http')
var querystring = require('querystring')


//2 创建服务器
var server = http.createServer();
//3 监听请求
server.on('request', function(req, res){
    //获取当前请求地址
	var currentUrl = req.url
	//判断请求地址
	if (currentUrl == '/') {
         console.log('”加载留言板列表');
	//请求“/”加载留言板列表
		fs.readFile('./view/index.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	} else if (currentUrl == '/add') {
    //请求“/add”加载留言板添加
        console.log('add”加载留言板添加');
		fs.readFile('./view/add.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	}  else if (currentUrl.indexOf('/public') === 0) {
	//检测静态资源并响应（略难）
        console.log('检测静态资源并响应（略难）');
        fs.readFile('./' + currentUrl, 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
		   // res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
        })
    } else if (currentUrl.indexOf('/doadd') == 0) {
        
        //表单提交数据处理
        if (req.method == 'POST') {
            //明确：表单post提交的数据可能会非常大，所以分片获取
            //说明：data事件-数据传输中，end事件-数据传输完毕
            var postData = '';
            req.on('data', function (chunk) {
                postData += chunk; 
            }); 
            req.on('end', function () {
                //通过querystring模块将字符串数据转化为对象
                paramObj = querystring.parse(postData); 
                console.log(paramObj)
                //2.入库（压入到数组 push pop）
                var d = new Date();
                var date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+
                            d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
                var msg = {name: paramObj.name, content: paramObj.content, create_at: date}
                msgs.push(msg)
                //3.跳转
                res.statusCode = 302;
                res.setHeader('Location', '/')
                res.end()
            });
        }else {
			//1.接受数据
			var paramObj = url.parse(req.url, true).query
			console.log(paramObj)
			//2.入库（压入到数组 push pop）
			var d = new Date();
			var date = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+
			         d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
			var msg = {name: paramObj.name, content: paramObj.content, create_at: date}
			msgs.push(msg)
			//3.跳转
			res.statusCode = 302;
			res.setHeader('Location', '/')
			res.end()
		}

	} else {
	//否则404
		fs.readFile('./view/404.html', 'utf8', function(err, data){
			if (err) res.end('404 Not Found');
			res.setHeader('Content-Type', 'text/html;charset=utf-8');
			res.write(data)
			res.end()
		})
	}
})

//启动服务
server.listen(8080, function(){
    console.log('启动成功访问：http:localhost:8080');
})  