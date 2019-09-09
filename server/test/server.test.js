const expect = require('expect');
const request = require('supertest');

const {app} = require('../server');
const {Todo} = require('../models/todo');

const todos = [{
    text: 'First test todo'
   },{
    text: 'Second test todo'
   }];
   



   beforeEach((done) => {
    Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
    }).then(() => done());
   });
   

 //
 
 describe('GET /todos', () => {
    it('should get all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res) => {
    expect(res.body.todos.length).toBe(2);
    })
    .end(done);
   })
});

//Adding describe block for the test cases
describe('POST /todos', () => {
    it('should create a new todo',(done) => {
        //start laying out our test cases
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        //we send across valid data
        .expect(200)
        //make an assertion about the body
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        //it handles any errors that might have ocurred
        //      this'll be if the status wasn't 200, or if the body 
        //      doesn't have a text property  equal to text.
        .end((err, res) => {
            if(err) {
                //return stops the function execution
                return done(err);
            } 

            //Making a request to fetch the Todos from the database
                
            Todo.find({text}).then((todos) => {
                //function evaluates the length of todos 
                // and expects to be 1
                expect(todos.length).toBe(1);
                //function expects the value in [0] to be text
                expect(todos[0].text).toBe(text);
                //if everything worked as expected, done is called
                done();
            }).catch((e) => done(e));
        });

        

    })

    it('should not create todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) {
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
               }).catch((e) => done(e));
        });
    });
});
   

   