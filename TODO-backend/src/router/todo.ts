import express, { Router } from "express";
import { addTodoItem, deleteTodoItem, getTodoList, updateTodoItem } from "../controller/todo";
const todoRouter: Router = express.Router();

todoRouter.get('/', getTodoList);

todoRouter.post('/add', addTodoItem);

todoRouter.put('/update', updateTodoItem);

todoRouter.delete('/delete', deleteTodoItem);

// Export the router so that it can be used in your main application file
export default todoRouter;