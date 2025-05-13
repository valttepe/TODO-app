import { Box, Button, ListItem, ListItemText } from "@mui/material"
import { TodoListData } from "../types/todoTypes"

interface Props {
  todoListItem: TodoListData
  updateTodoClick: (id: number, progressState: boolean) => void;
  deleteTodoClick: (id: number) => void;
}

function TodoItem({ todoListItem, updateTodoClick, deleteTodoClick }: Props) {
  console.log('testing', todoListItem)
  const stateColor = todoListItem.progress_state ? 'lightgreen' : 'lightblue';
  return (
    <ListItem id="todo-list-item" sx={{display: 'flex', flexDirection: 'column', backgroundColor: stateColor, margin: '1em'}}>
      <ListItemText
        id="todo-list-item-text"
        primary={todoListItem.title}
        secondary={todoListItem.description}
       />
       <Box sx={{ display: 'flex'}}>
        <Button onClick={() => updateTodoClick(todoListItem.id, todoListItem.progress_state)}>Tehty</Button>
        <Button onClick={() => deleteTodoClick(todoListItem.id)}>Poista</Button>
       </Box>
       
    </ListItem>
  )
}

export default TodoItem