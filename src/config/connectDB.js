// get the client
const mysql = require("mysql2/promise");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = connection;
