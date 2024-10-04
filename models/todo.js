import { Schema,model } from "mongoose";

const todoschema = new Schema({
    title: {type: String, required: true},
    completed: {type: Boolean, default: false} 
});

export const TodoModel = model('Todo',todoschema);