import mysql from "mysql2";
 const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: "kipngetich22",
    database:"litein"
}).promise()
export default pool
