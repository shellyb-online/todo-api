import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
// import { string } from "joi";

const userschema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: {type: String},
    role: {type:String, default:"user", enum: ["user", "vendor", 'admin', "superadmin"]}
},
    {
        timestamps: true,
    });

// Apply plugin
userschema.plugin(toJSON);

export const UserModel = model('User', userschema);