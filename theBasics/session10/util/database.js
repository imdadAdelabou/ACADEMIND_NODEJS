const mySql = require("mysql2");

const pool = mySql.createPool({
    host: "localhost",
    user: "root",
    database: "nodecomplete",
    password: "avatarimdad96"
});

module.exports = pool.promise();