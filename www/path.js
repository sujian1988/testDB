//dirname 后去掉一层
//basename 取最后一层


//1 引入内置模块
var path  = require('path');

var testData = 'D:/GitCode/testDB/www/path.js';

console.log(path.basename(testData));

testData = path.dirname(testData);

console.log(path.dirname(testData));
console.log(path.basename(testData));