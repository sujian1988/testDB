var os = require("os");

console.log("主机名：" + os.hostname());
console.log("操作系统：" + os.type)
console.log("操作系统平台："  + os.platform());
console.log("内存总量：" + os.totalmem());
console.log("空闲内存：" + os.freemem());