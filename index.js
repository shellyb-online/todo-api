import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// connect to database
await mongoose.connect(process.env.MONGO_URI);


// Create an express app
const app = express();

// use middlewares
app.use(express.json());

// Define routes
app.use(todoRouter);
app.use(userRouter);
// Define routes
// app.get('/goodbye',(req, res, next) => {
//     console.log(req.query);
//     res.json('same to you!'); 
// });

// listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000');
});