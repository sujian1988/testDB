//引入fs模块
var fs = require('fs');

fs.writeFile('./a.txt', '你好，小白白', function(err){
    //err 为null 成功
    //drr 不为null 有瑕疵

    if(err){
        console.log(err);
        return;
    }
    console.log('success');


})