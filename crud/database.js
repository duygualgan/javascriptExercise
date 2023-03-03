const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'duygu123',
    database: 'node'
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Bağlandı!");
   
  });

module.exports = connection;