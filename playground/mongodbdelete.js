
const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoAppTest', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
   
        const db = client.db('TodoApp');

        db.collection('Todos').deleteMany({text: 'Walk the donkey'});  
        

});
