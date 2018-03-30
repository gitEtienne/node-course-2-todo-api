// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });

    // deleteOn
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });
    
    // Users
    
    // db.collection('Users').deleteMany({name: 'Clare'}).then((result) =>{
    //     console.log(result)
    //  });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5abe63c7ab7def24d42b4126")
    }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
});