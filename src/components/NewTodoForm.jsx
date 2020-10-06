import React, { useState } from "react";
import axios from 'axios';
import { TextField, Paper, Box } from '@material-ui/core';

const NewTodoForm = ({ _id, pushNewTask }) => {
  const [text, setText] = useState("");

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleSubmission = event => {
    axios.post('http://localhost:3010/api/tasks/', { _id, text })
      .then(res => pushNewTask(res.data))
    setText("");
    event.preventDefault();
  };

  return (
    // TODO change in put to textfield:
    // https://material-ui.com/components/text-fields/
    <Box display="flex" m={1}>

      <form onSubmit={handleSubmission}>
        {/* <input type="text" onChange={handleChange} value={text} /> */}
        <TextField
        //TODO find out why fullWidth does not work
          fullWidth
          id="todo-input"
          label="New task..."
          variant="outlined"
          onChange={handleChange}
          margin="normal"
          value={text} />
      </form>
    </Box>
  );
};

export default NewTodoForm