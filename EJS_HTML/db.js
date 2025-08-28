let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port:4306,
  password: "",
  database:"nodedb"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM reg_table", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});