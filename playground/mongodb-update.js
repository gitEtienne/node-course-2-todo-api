// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

   
    // db.collection('Todos').findOneAndUpdate({
    //     text: 'Walk the dog'
    // }
    // , {
    //     $set: {
    //         completed: false
    //     }
    // },
    // {
    //     returnOriginal: false
    // }
    // ).then((result) =>{
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5abe629b0aed3d20606d1fbc")
    }
    , {
        $inc: {
            age: 1
        }
    },
    {
        returnOriginal: false
    }
    ).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
});