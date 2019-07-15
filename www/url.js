//1 引入url内置模块
var url = require('url')

//2 使用
var data = 'http://itcast.cn?name=张三&age=18';

console.log(data);
console.log(url.parse(data));

console.log(url.parse(data, true)); // query'变成了对象

var urlQueryObj = url.parse(data, true);

console.log(urlQueryObj.query);
console.log(urlQueryObj.query.name);
console.log(urlQueryObj.query.age);