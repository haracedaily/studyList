const mysql = require("mysql2/promise");

export const pool = mysql.createPool();

