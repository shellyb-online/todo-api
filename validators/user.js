import { json } from "express";
import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("user", "vendor")

});

export const UserloginValidator = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const updateProfileValidator = Joi.object({
    name: Joi.string(),
    avatar: Joi.string()
});


