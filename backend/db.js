import mysql from "mysql2";
 

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "kipngetich22",
    database:"litein"
}).promise()

