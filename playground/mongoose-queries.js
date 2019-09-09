const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');


//valid Id on mongodb Todo collection 
//var id = '6d72df5a89eeca12bc0e4217';

//Todo.find method

// Todo.find({
//  _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
//    }).then((todo) => {
//     console.log('Todo', todo);
//    });

// Todo.findById(id).then((todo) => {
//     console.log('Todo By Id', todo);
//    });


//print out an elegant message when the document is not found

//    Todo.findById(id).then((todo) => {
//     if(!todo   ) {
//         return console.log('Id not found');
//     }
//         console.log('Todo By Id', todo);
//    }).catch((e) => console.log(e));

//Validating an ObjectID
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
//    }


// Todo.findById(id).then((todo) => {

//     if(!todo) {
//     return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
//    }).catch((e) => console.log(e));
   

   //WORKING WITH THE USER
   User.findById('5a8708e0e40b324268c5206c').then((user) => {
    if(!user) {
    return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
   }, (e) => {
    console.log(e);
   });
   

   