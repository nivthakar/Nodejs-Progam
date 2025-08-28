let mysql = require('mysql');
let express = require('express');
let con = mysql.createConnection({
    host        : "localhost",
    user      : "root",
    port      : 4306,
    password  : "",
    database : "sem3"    

});
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
