
import pool from "../db.js";
export const signup =(req, res) => {
    const sql = "INSERT INTO signup (email, password, name) VALUES (?, ?, ?)";
    const values = [
        req.body.email, 
        req.body.password, 
        req.body.name
    ];

    pool.query(sql, values, (err, data) => {
        if (err) {
            return res.json({ errorMessage: err });
        } else {
            return res.json(data);
        }
    });
}

