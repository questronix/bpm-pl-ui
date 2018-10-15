"use strict";

const mysql = require('mysql');

/* for localhost mysql database */
const config = {
    host:       process.env.DB_HOST || 'localhost',
    user:       process.env.DB_USER || 'root',
    password:   process.env.DB_PASS || '',
    name:       process.env.DB_NAME || '',
    port:       process.env.DB_PORT || '3306',
};

if(process.env.DB_SSL === 'true'){
    Object.assign({}, config, {ssl: process.env.DB_SSL_KEY});
}

const state = {
    pool: null
};

exports.connect = function (done) {

    let pool_options = {
        connectionLimit: 100, //important
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.name,
        port: config.port
    };

    if(config.ssl){
        Object.assign({}, pool_options, {
            ssl:{
                ca: config.ssl
            }
        });
    }

    state.pool = mysql.createPool(pool_options);

    return new Promise((resolve, reject) => {
        let conn = execute("Select version()", []);
        conn.then((data) => {
            resolve(data);
        }).catch((error) => {
            reject(error);
        });
    });
};

exports.get = function (callback) {
    return state.pool;
};

function execute(sql, param) {
    return new Promise((resolve, reject) => {
        state.pool.getConnection(function (error, connection) {
            if (error) {
                reject(error);
            } else {
                connection.query(sql, param, function (err, rows) {
                    connection.release();
                    if (!err) {
                        resolve(JSON.parse(JSON.stringify(rows)));
                    }
                    else {
                        reject(err);
                    }
                });

                connection.on('error', function (err) {
                    connection.release();
                    reject(err);
                });
            }
        });
    });
};

exports.execute = execute;