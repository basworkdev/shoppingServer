const mysql = require('mysql');

// local
// const user = "root";
// const host = "localhost";
// const password = "";
// const database = "shopping";

// server
const user = "root";
const host = "34.87.136.246";
const password = "sarawut0304";
const database = "rodxshop";

const db = mysql.createConnection({
    user: user,
    host: host,
    password: password,
    database: database
}) 

module.exports = db;