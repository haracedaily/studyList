const mysql = require('mysql2/promise');
require('dotenv').config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    waitForConnections: true, //pool 에 가져올 수 있는 커넥션이 없을 때 바로 에러를 리턴할지 아니면 풀에서 유효한 커넥션을 대기할지 설정 (Default: true - queue 에 대기)
    connectionLimit:10,//연결 제한 10개
    queueLimit:0,//작업지시 무한
})
//
// try{
//     pool.getConnection((err,connection)=>{
//         if(err){
//             console.error(err);
//             return;
//         }
//         console.log('dbconn');
//         connection.release();
//     })
// }catch (e){
//     console.log(e);
// }

module.exports = {pool};