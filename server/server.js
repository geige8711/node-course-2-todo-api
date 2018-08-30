const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const mongoose = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
app.use(bodyParser.json());

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
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