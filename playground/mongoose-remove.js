const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5abfd6d0556c0ad03efc67c2'}).then((todo) =>{

})

Todo.findByIdAndRemove('5abfd6d0556c0ad03efc67c2').then((todo) =>{
    console.log(todo);
})