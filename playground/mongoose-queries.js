const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/// 5abe9787a0d6f37c3e2ce130
//var id = '5abe9787a0d6f37c3e2ce13011';

// if (!ObjectId.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id 
// }).then((Todos)=>{
//     console.log('Todos', Todos)
// });

// Todo.findOne({
//     _id:id 
// }).then((todo) =>{
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todobyid) =>{
//     if (!todobyid){
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todobyid)
// }).catch((e) => console.log(e));

User.findById('5abe7922d0bec95034d10607').then((user) =>{
    if(!user){
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2))
}, (e) =>{
    console.log(e)
});
