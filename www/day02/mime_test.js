var mime = require('mime')

var img = 'xxxx.png';
var imgMimeType = mime.getType(img);
var imgType = mime.getExtension('image/png');
// mime.getType('txt');                    // ⇨ 'text/plain'
// mime.getExtension('text/plain');   

console.log(imgMimeType);
console.log(imgType);

//C:\Users\DELL\AppData\Roaming\npm
//npm 自定义命令在package.json
