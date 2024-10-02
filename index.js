import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@todoapi.elum6.mongodb.net/todo-db?retryWrites=true&w=majority&appName=todoapi');

// Create an express app
const app = express();

// Define routes
app.use(todoRouter);
app.use(userRouter); 
// Define routes
// app.get('/goodbye',(req, res, next) => {
//     console.log(req.query);
//     res.json('same to you!'); 
// });

// listen for incoming requests
app.listen(3000,() => {
    console.log('App is listening on port 3000');
});