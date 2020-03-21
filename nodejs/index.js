var express = require('express')                                                       //Requiring modules
var app = require(express())
var cors = require('cors')
 
app.use(app.json())                                                                    //Using modules
app.use(cors())


//app.set('port', process.env.PORT || 3000);                                             //Setting port value to default environment variable otherwise 3000

var route = require('./routes/customerroute.js');                                      //Using route file
app.use('/customer',route);

//var someport = app.get('port');                                                        //Getting port


app.listen(3000,(req,res)=>{console.log("App listening on port 3000!!");});             //Listening to port which the statement gets.



