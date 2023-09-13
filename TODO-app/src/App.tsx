import { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import { Box } from '@mui/material'
import AddTodo from './components/AddTodo'
import { addTodoItem, deleteTodoItem, getTodoItemList, updateTodoItem } from './actions/todoAction'

interface TodoListData {
  id: number,
  title: string,
  description: string, 
  progress_state: boolean
}

function App() {
  // TODO: Fetch data to todolist
  // TODO: Save data to todolist
  // TODO: Delete data from todoList

  const [todoListData, setTodoListData] = useState<TodoListData[]>([])
  // Initial list
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodoItemList();
      setTodoListData(data)
    }
    fetchData().catch(console.error);
  }, [])

  async function addTodoClick(title: string, description: string) {
    console.log('testing', title + description);
    await addTodoItem({ title: title, description: description })
    const data = await getTodoItemList();
    setTodoListData(data);
  }

  async function updateTodoClick(id: number, progressState: boolean) {
    console.log('tetsaa', !progressState);
    await updateTodoItem({ id: id, progressState: !progressState })
    const data = await getTodoItemList();
    console.log('data', data);
    setTodoListData(data);
  }

  async function deleteTodoClick(id: number) {
    console.log('testing', id);
    await deleteTodoItem(id)
    const data = await getTodoItemList();
    setTodoListData(data);
  }
  return (
    <Box component="main">
      <AddTodo addTodoClick={addTodoClick} />
      <Box 
        component="section"
        sx={{
          borderStyle: 'solid',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px',
        }}
      >
       { todoListData && (
          <TodoList 
            todoListData={todoListData}
            updateTodoClick={updateTodoClick}
            deleteTodoClick={deleteTodoClick}
          />
       )} 
      </Box>
    
    </Box>
  )
}

export default App
