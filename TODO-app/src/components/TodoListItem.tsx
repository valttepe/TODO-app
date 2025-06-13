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
    <ListItem id="todo-list-item" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: stateColor, padding: "1em", marginBottom: "1em", borderRadius: "0.6em", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2);" }}>
      <ListItemText
        id="todo-list-item-text"
        primary={todoListItem.title}
        secondary={todoListItem.description}
      />
      <Box sx={{ display: 'flex' }}>
        <Button onClick={() => updateTodoClick(todoListItem.id, todoListItem.progress_state)}>Tehty</Button>
        <Button onClick={() => deleteTodoClick(todoListItem.id)}>Poista</Button>
      </Box>

    </ListItem>
  )
}

export default TodoItem