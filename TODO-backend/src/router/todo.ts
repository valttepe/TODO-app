import express, { Router } from "express";
import todoController from "../controller/todo";
const todoRouter: Router = express.Router();

todoRouter.get('/', todoController.getTodoList);

todoRouter.post('/create', todoController.saveTodoItem);

todoRouter.put('/update', todoController.updateTodoItem);

todoRouter.delete('/delete', todoController.deleteTodoItem);

// Export the router so that it can be used in your main application file
export default todoRouter;