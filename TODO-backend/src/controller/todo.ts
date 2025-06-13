import { Request, Response } from "express";
import todoDb from "../database/todo";

async function getTodoList(req: Request, res: Response) {
  try {
    const progressState = req.query.progressState == "1" ? true : false;
    console.log('state', req.query.progressState);
    const data = await todoDb.getTodoListData(progressState);
    console.log('testing');
    res.send(data);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function saveTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const title: string = req.body.title;
    const description: string = req.body.description;
    await todoDb.saveTodo(title, description)
    res.sendStatus(200);

  } catch (error) {
    console.error(error)
    res.sendStatus(500);
  }
}

async function updateTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const id: number = req.body.id;
    const progressState: boolean = req.body.progressState;
    await todoDb.updateTodo(id, progressState)
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function deleteTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const id: number = req.body.id;
    await todoDb.deleteTodo(id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export default {
  getTodoList,
  saveTodoItem,
  updateTodoItem,
  deleteTodoItem
}