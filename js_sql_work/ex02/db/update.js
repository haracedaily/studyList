const mysql = require('mysql2');

function people_update(name,age,person_id){
    const  dbInfo = {
        host:'192.168.0.104',
        user:'root',
        password:'rootpassword',
        database:'mh'
    };
    const connection = mysql.createConnection(dbInfo);

    connection.connect();
    const sql = 'update people set person_name=?, age=? where person_id = ?';
    connection.query(sql,[name,age,person_id],(err,res)=>{
        if(err)throw err;
        console.log(res.info);
    })
    connection.query('select * from people',(err,res)=>{
        if(err)throw err;
        console.log(res);
    })
    connection.end();
}

module.exports = people_update;