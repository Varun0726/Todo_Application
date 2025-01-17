const zod = require("zod");

const todo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id:zod.string(),
})


module.exports = {
    createTodo: todo,
    updateTodo:updateTodo
}