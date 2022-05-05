var express = require ('express'); //create module express using require
var app = express();   // create an object from express

//invoked module by using it
app.get('/', (req, res)=>{

})

var server = app.listen(8080, function(){}); // listen to port 8080

