const mysql = require('mysql2');
const config = require('../config');

const pool = mysql.createPool(Object.assign(config.database, {waitForConnections: true}))

const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection){
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, resluts) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resluts);
                    }
                    connection.release();
                })
            }
        })
    })
}


module.exports = {
    query
}