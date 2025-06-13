import { Box, Button, FormGroup, TextField, Typography } from "@mui/material"
import { useState } from "react";

interface Props {
  saveTodo: (title: string, description: string) => void;
}

function AddTodo({ saveTodo }: Props) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Box component="form">
      <Typography component="h2">Lisää tehtävä</Typography>
      <Box sx={{ display: "flex", margin: '1,5em' }}>
        <TextField
          id="add-title"
          label="Otsikko"
          onChange={(event) => setTitle(event?.target.value)}
          sx={{ marginRight: '1em' }}
          required

        />
        <TextField
          id="add-description"
          label="Sisältö"
          multiline
          onChange={(event) => setDescription(event?.target.value)}
          sx={{ marginRight: '1em' }}
          required

        />
        <Button id="add-new" type="submit" variant="contained" onClick={() => saveTodo(title, description)}>Lisää</Button>
      </Box>
    </Box >
  )
}

export default AddTodo