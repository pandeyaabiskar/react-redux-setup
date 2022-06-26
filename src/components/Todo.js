import { Box, Button, Typography, TextField } from '@mui/material';
import {useState} from 'react';

function Todo () {
    const [todo, setTodo] = useState('');
    const handleChange = (event) => {
      setTodo(event.target.value);
    };
  
    const [todos, setTodos] = useState([])
  
    const addTodo = () => {
      setTodos([...todos, todo])
      setTodo('');
    }

    return (
        <Box margin={10} textAlign="center">
        <Typography variant="h1" color="primary" gutterBottom>To-do Application</Typography>
        <TextField
            id="filled-name"
            label="Enter a todo for today"
            value={todo}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            sx={{marginBottom : "5px"}}
            size="small"
          />
        <Button variant="contained" onClick={addTodo}>Add Todo</Button>
        {todos.map(todo => {
          return <Typography variant="h4">{todo}</Typography>
        })}
      </Box>
    )
}

export default Todo;