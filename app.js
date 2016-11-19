var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "jay",
  password: "jay"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end(function(err) {

});
