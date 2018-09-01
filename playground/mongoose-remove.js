const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndDelete('5b8a8613ff9597fbc392d80f').then((todo) => {
    console.log(todo);
});