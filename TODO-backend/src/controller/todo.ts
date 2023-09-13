import { Request, Response } from "express";
import { deleteTodo, getTodoListData, saveTodo, updateTodo } from "../database/todo";

export async function getTodoList(req: Request, res: Response) {
  try {
    const data = await getTodoListData();
    console.log('testing');
    res.send(data);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function addTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const title: string = req.body.title;
    const description: string = req.body.description;
    await saveTodo(title, description)
    res.sendStatus(200);

  } catch (error) {
    console.error(error)
    res.sendStatus(500);
  }
}

export async function updateTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const id: number = req.body.id;
    const progressState: boolean = req.body.progressState;
    await updateTodo(id, progressState)
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteTodoItem(req: Request, res: Response) {
  try {
    console.log('BODY', req.body);
    const id: number = req.body.id;
    await deleteTodo(id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}