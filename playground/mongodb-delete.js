// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5abe63c7ab7def24d42b4126")
    }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
});