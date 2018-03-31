var express = require('express');
var bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((doc)=>{
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) =>{
    Todo.find().then((todos) =>{
        res.send({todos})
    },(e) =>{
        res.status(400).send(e);
    });
})

// GET  /todos/123465
app.get('/todos/:id', (req, res) =>{
    var id = req.params.id;

   

    // valide id user isValid
        // 404
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }

    //findById
        // sucess
        // error 
            //400 -

    Todo.findById(id).then((todo) =>{
        if(!todo)
            return res.status(404).send();
        
        res.send({todo});    
    }, (e) =>{
        res.status(400).send();
    })
    //res.send(req.params);
})

app.listen(3000, () =>{
    console.log('Started on port 3000')
});

module.exports = {app};