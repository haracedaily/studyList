const mysql = require("mysql2");

function people_insert(name,age) {
    const dbInfo = {
        host: "192.168.0.104",
        user: "root",
        password: "rootpassword",
        database: "mh"
    };

    const conn = mysql.createConnection(dbInfo)

    conn.connect();

    const sql = "insert into people(person_name,age) values ?";//VALUES (?, ?, ?)'; => [?,?,?]; values ?; => [[?,?,?],[?,?,?]];
    const value = [[name,age]];//[['홍길', 30], ['차길', 20]];
    conn.query(sql, [value], (err, res) => {
        if (err) throw err;
        console.log(res);
        
    })
    conn.query('select * from people',(error,result,fields)=>{
        if(error) throw error;
        console.log(result);
    
    })

    conn.end();
}

module.exports = {people_insert};