const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true }, (err, client)=>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Users').deleteMany({name:'Andrew'}).then((res)=>{
        console.log(res);
        // console.log('Todos');
        // console.log(JSON.stringify(doc, undefined, 2));
    }).catch((err)=>{
        console.log('Unable to fetch todos', err);
    });

});