export const addTodo = (req, res, next) => {
    // validate user inputs
    // write todo to database
    // Respond to request
    res.json('Todo was added!');
}

export const getTodos = (req, res, next) => {
    res.json('All Todos');
}


export const updateTodo = (req, res, next) => {
    res.json('Todo updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}