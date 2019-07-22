/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
//var dbconfig = require('../config/database');
//var connection = mysql.createConnection(dbconfig.connection);

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

//增加数据
// connection.query("insert into stu values(null, 'a', 18, '男', default)", function(error, results,fields){
//     if(error) throw error;
//     console.log('the solution is:', results);
// });

//查询数据
// connection.query("select * from stu", function(error, results,fields){
//     if(error) throw error;
//     console.log('the solution is:', results);
// });

//修改数据
// connection.query("update stu set name = 'ko ni qi wa' where id = 1", function(error, results, fields){
//     if(error)throw error;
//     console.log('the solution is:', results);
// })

//删除数据
connection.query("delete from stu where id = 1", function(error, results, fields){
    if(error)throw error;
    console.log('the solution is:', results);
})

console.log('Success: Database Created!')

connection.end();
