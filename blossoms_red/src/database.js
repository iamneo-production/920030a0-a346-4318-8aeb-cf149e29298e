var mysql = require('mysql2');

var con = mysql.createConnection({
    host:"localhost",
    user:"team4",
    password:"password",
    database:"blossoms"

});

con.connect(function(err) {
console.log("Connected");
var sql = "create table customers(email VARCHAR(255),username VARCHAR(255),mobileNumber INT,password VARCHAR(255),confirmPassword VARCHAR(255)";
con.query(sql,function(result){
    console.log("table created");
    
});
});


