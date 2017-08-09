var mysql = require('mysql');

var con = mysql.createConnection({
    
    host: "phpmyadmin.co",
    server: "sql12.freemysqlhosting.net",
    port:"3306", 
    username: "sql12189144",
    password: "mHryp22AL9",
    
//sss
});
 
con.connect(function(err){

if(err){
    throw err;
}
else console.log("Connected!");
});

module.exports.con;
