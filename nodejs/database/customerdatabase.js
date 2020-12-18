var mysql = require('mysql');                                                   //Requiring modules

var dbconnection =mysql.createConnection({                                      //Initializing variables
    host:'localhost',
    user:'root',
    password:'********',
    database:'berkadia'
});


dbconnection.connect();                                                         //Connecting to database first


module.exports = dbconnection;                                                  //Exporting connection object
