//1 引入fs模块
var fs = require('fs');
//2 练习 读取a。txt内容
fs.readFile('a.txt', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);

    console.log(data.toString());
})

//多学一招
fs.readFile('a.txt', 'utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);

    console.log(data.toString());
})  