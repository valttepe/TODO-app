import { Box, List, Typography } from "@mui/material"
import TodoListItem from "./TodoListItem"
import { TodoListData } from "../types/todoTypes"

interface Props {
  id: string;
  title: string;
  todoListData: TodoListData[];
  updateTodoClick: (id: number, progressState: boolean) => void;
  deleteTodoClick: (id: number) => void;
}

function TodoList({ id, title, todoListData, updateTodoClick, deleteTodoClick }: Props) {
  return (
    <Box>
      <Typography variant="h2" align="center">{title}</Typography>
      <Box
        id={id}
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0em 3em 3em'
        }}
      >
        <List id="todo-list" sx={{ width: '30em' }}>
          {todoListData.map((todoListItem) => (
            <TodoListItem
              key={todoListItem.id}
              todoListItem={todoListItem}
              updateTodoClick={updateTodoClick}
              deleteTodoClick={deleteTodoClick} />
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default TodoList