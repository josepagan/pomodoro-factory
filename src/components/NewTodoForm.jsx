import React, { useState } from "react";
import axios from 'axios'

const NewTodoForm = ({_id, pushNewTask }) => {
    const [text, setText] = useState("");

    const handleChange = event => {
      setText(event.target.value);
    };
  
    const handleSubmission = event => {
      axios.post('http://localhost:3010/api/taskLists/',{_id,text})
      //TODO what I have to do is just push the last one into tasks
      .then(res => pushNewTask(res.data))    
      setText("");
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmission}>
        <input type="text" onChange={handleChange} value={text} />
      </form>
    );
  };
  
  export default NewTodoForm