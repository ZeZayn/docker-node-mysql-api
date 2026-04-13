const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: '1234',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("Connected to MYSQL");
});

connection.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(results);
});


