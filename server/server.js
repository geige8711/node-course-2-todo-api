const express = require('express');
let app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');
app.use(bodyParser.json());


//GET /todos/12345
app.get('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

app.post('/todos', (req, res) => {
    // console.log(req.body);
    let todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndDelete(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

module.exports = {app};

// let newTodo = new Todo({text:'cook dinner'});
// newTodo.save().then((doc)=>{
//     console.log(doc);
// }).catch((e)=>{
//     console.log('unable to save data', e);
// });

// let otherTodo = new Todo({
//     text: '      learn IT Technology     '
// });
// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc, undefined, 2));
// }).catch((e)=>{
//     console.log('unable to save', e);
// });