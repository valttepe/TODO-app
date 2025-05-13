import { Box, Button, TextField } from "@mui/material"
import { addTodoItem } from "../actions/todoAction";
import { useEffect, useRef, useState } from "react";

interface Props {
  addTodoClick: (title: string, description: string) => void;
}

function AddTodo({addTodoClick}: Props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box component="section" sx={{ display: "flex", margin: '1,5em' }}>
      <TextField 
        id="add-title"
        label="Otsikko"
        variant="filled"
        onChange={(event) => setTitle(event?.target.value)}
        sx={{ marginRight: '1em'}}
      />
      <TextField
          id="add-description"
          label="Sisältö"
          multiline
          variant="filled"
          onChange={(event) => setDescription(event?.target.value)}
          sx={{ marginRight: '1em'}}
      />
      <Button id="add-new" variant="contained" onClick={() => addTodoClick(title, description)}>Lisää</Button>
    </Box>
  )
}

export default AddTodo