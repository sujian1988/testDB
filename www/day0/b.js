//步骤1 定义
function add(){
    console.log("this is add");
}

function del(){
    console.log("this is del");
}

function exit(){
    console.log("this is exit");
}

function select(){
    console.log("this is select");
}   

//步骤2 导入(语法： exports/module.exports.成员名 = 值)
exports.add = add;
exports.del = del;
exports.exit = exit;
exports.select = select;