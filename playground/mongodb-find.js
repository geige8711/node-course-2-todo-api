const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err, client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').find().count().then((count)=>{
        console.log(`${count}`)
        // console.log('Todos');
        // console.log(JSON.stringify(doc, undefined, 2));
    }).catch((err)=>{
        console.log('Unable to fetch todos', err);
    });

});