import { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import { Box, Typography } from '@mui/material'
import AddTodo from './components/AddTodo'
import { saveTodo, deleteTodoItem, getTodoItemList, updateTodoItem, saveTodoItem } from './actions/todoAction'

interface TodoListData {
  id: number,
  title: string,
  description: string,
  progress_state: boolean
}

function App() {

  const [todoListData, setTodoListData] = useState<TodoListData[]>([])
  const [doneListData, setDoneListData] = useState<TodoListData[]>([])
  // Initial list
  useEffect(() => {
    const fetchData = async () => {
      const todoList = await getTodoItemList(false);
      setTodoListData(todoList)
      const doneList = await getTodoItemList(true);
      setDoneListData(doneList);
    }
    fetchData().catch(console.error);
  }, [])

  async function saveTodo(title: string, description: string) {
    await saveTodoItem({ title: title, description: description })
    const todoList = await getTodoItemList(false);
    setTodoListData(todoList)
    const doneList = await getTodoItemList(true);
    setDoneListData(doneList);
  }

  async function updateTodoClick(id: number, progressState: boolean) {
    await updateTodoItem({ id: id, progressState: !progressState })
    const todoList = await getTodoItemList(false);
    setTodoListData(todoList)
    const doneList = await getTodoItemList(true);
    setDoneListData(doneList);
  }

  async function deleteTodoClick(id: number) {
    await deleteTodoItem(id)
    const todoList = await getTodoItemList(false);
    setTodoListData(todoList)
    const doneList = await getTodoItemList(true);
    setDoneListData(doneList);
  }
  return (
    <Box component="main">
      <AddTodo saveTodo={saveTodo} />
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {todoListData && (
          <TodoList
            id="todo-container"
            title="Tekemättä"
            todoListData={todoListData}
            updateTodoClick={updateTodoClick}
            deleteTodoClick={deleteTodoClick}
          />
        )}
        {doneListData && (
          <TodoList
            id="done-container"
            title="Tehdyt"
            todoListData={doneListData}
            updateTodoClick={updateTodoClick}
            deleteTodoClick={deleteTodoClick}
          />
        )}

      </Box>
    </Box>
  )
}

export default App
