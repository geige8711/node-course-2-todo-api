const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

let id = '5b8692e8bb97590b0f78dc51';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if(!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e)=>{
    if(!ObjectID.isValid(id)) {
        console.log('ID not valid');
    }
    console.log(e);
});

User.findById('5b87e2812ba51d179a19f71f').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e)=>console.log(e));