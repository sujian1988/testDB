/**
 * Created by barrett on 8/28/14.
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');
//var connection = mysql.createConnection(dbconfig.connection);

var connection = mysql.createConnection({      
    host:'39.96.18.249',
    port:'3306',
    user:'root',
    password:'Sj86624932.',
    database:'APP'
});

//连接数据库
connection.connect(function(err){
    if(err){
        console.log("mysql数据库连接失败！" + err)
        reuturn;
    }
    console.log("mysql数据库连接成功！")
});


connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` CHAR(60) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)');

console.log('Success: Database Created!')

connection.end();
