const connection = require('mongodb').MongoClient;

const url = 'mongodb+srv://amira:amira@cluster0.jpeg6.mongodb.net/EmployeeDB?retryWrites=true&w=majority';

connection.connect(url, function(err, db){
    // console.log("Connected Sussessfully");
    // db.close();

    // var employees = db.collection('Employee').find();
    // var employees = db.Employee.find();

    // employees.forEach(element => {
    //     console.log("ele", element)
    // })
    // // });(function(err, doc){
    // //     console.log(doc);
    // // })

    db.collection('Employee').insertOne({
        name: "NewEmployee"
        });
        
})