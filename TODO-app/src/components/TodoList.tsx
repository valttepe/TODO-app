import { List } from "@mui/material"
import TodoListItem from "./TodoListItem"
import { TodoListData } from "../types/todoTypes"

interface Props {
  todoListData: TodoListData[];
  updateTodoClick: (id: number, progressState: boolean) => void;
  deleteTodoClick: (id: number) => void;
}

function TodoList({ todoListData, updateTodoClick, deleteTodoClick }: Props) {
  return (
    <List id="todo-list" sx={{ width: '30em'}}>
      {todoListData.map((todoListItem) => (
        <TodoListItem
          key={todoListItem.id}
          todoListItem={todoListItem}
          updateTodoClick={updateTodoClick}
          deleteTodoClick={deleteTodoClick} />
      ))}
    </List>
  )
}

export default TodoList