var express = require ('express'); //create module express using require
var app = express();   // create an object from express

//invoked module by using it
app.use('view emngine','jade');
app.get('/', (req, res)=>{

})

app.listen(8080); // listen to port 8080