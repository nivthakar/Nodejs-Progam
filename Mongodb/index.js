let MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
let url = "mongodb://localhost:27017test/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
