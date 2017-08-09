var mysql = require('mysql');

var con = mysql.createConnection({
    
    host: "sql12.freemysqlhosting.net",
    port:"3306", 
    username: "sql12189144",
    password: "mHryp22AL9",
    database: "sql12189144"
    
//sss
});
 
con.connect(function(err){

if(err){
    throw err;
}
else console.log("Connected!");
});

con.query("SELECT * FROM user user" , function (err, result , fields){

    if(err){
        throw err;
    }

    console.log(result);


});



module.exports.con;
