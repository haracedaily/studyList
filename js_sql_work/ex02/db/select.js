const mysql = require('mysql2');

function people_select(){
const dbInfo = {
    host: '192.168.0.104',
    user: 'root',
    password : 'rootpassword',
    database: 'mh'
}
//db연결점 만들기
const connection = mysql.createConnection(dbInfo);
// console.log(connection);

//db 연결 시작
connection.connect();

connection.query('select * from people',(error,result,fields)=>{
    if(error) throw error;
    console.log(result);

})
//db 연결 끊기
connection.end();
}

module.exports = {people_select};