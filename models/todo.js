import { Schema, model } from "mongoose";
// import { toJSON } from "@reis/mongoose-to-json";

const todoschema = new Schema({
    title: {type: String, required: true},
    icon: {type:String, required: true},
    completed: {type: Boolean, default: false} 
}, {
    timestamps: true,
});

// Apply plugin
// todoschema.plugin(toJSON);

export const TodoModel = model('Todo',todoschema);