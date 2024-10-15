import Joi from "joi";

export const addTodoValidador = Joi. object({
    title: Joi.string().required(),
    icon: Joi.string().required()  
});

export const updateTodoValidator = Joi.object({
    title: Joi.string(),
    icon: Joi.string(),
    completed: Joi.boolean()
});
   
