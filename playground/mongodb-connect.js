
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoAppTest', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
   
        const db = client.db('TodoApp');
        
        //The find method

        // db.collection('Todos').find().toArray().then((docs) => { //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
            db.collection('Todos').find({
                _id: new ObjectID("5d6ea30449372d459131753b")
               }).toArray().then((docs) => {    
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
            }, (err) => {
            console.log('Unable to fetch todos', err);
            });

        // //Insert new doc into Users(name, age, location)
       
        // db.collection('Users').insertOne({
        //     name: 'Diego',
        //     age: 25,
        //     location: 'Mexico'
        //    }, (err, result) => {
        //     if(err) {
        //     return console.log('Unable to insert user', err);
        //     }
        //     console.log(result.ops);
        //    });

        // db.collection('Todos').insertOne({
        //         text: 'Something to do',
        //         completed: false
        //     }, (err, result) => {
        //         if(err){
        //             return console.log('Unable to insert todo', err);
        //             }
        //             console.log(JSON.stringify(result.ops, undefined, 2));
        //         });
        

      //  client.close();
});