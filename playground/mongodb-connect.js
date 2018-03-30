// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if(err){
    //         return console.log('Unsable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });   
    
    // db.collection('Users').insertOne({
    //     name: 'Clare',
    //     age: 38,
    //     location: 'Boston'
    // }, (err, result) =>{
    //         if(err){
    //             return console.log('Unsable to insert todo', err);
    //         }
    
    //         console.log(result.ops[0]._id.getTimestamp());
    //     });   
    
     db.close();

});