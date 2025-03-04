const mysql = require('mysql2');

function people_delete(person_id) {
    const connection = mysql.createConnection({
        host: '192.168.0.104',
        user: 'root',
        password: 'rootpassword',
        database: 'mh'
    });

    connection.connect();

        const sql = 'DELETE FROM people WHERE person_id = ?';
        connection.query(sql, [person_id], (error, result) => {
            if (error) throw error;
            console.log(`result = ${result}`);
        });
        connection.query('select * from people',(error,result,fields)=>{
            if(error) throw error;
            console.log(result);
        });
        connection.end();
};

module.exports = people_delete ;