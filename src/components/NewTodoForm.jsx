import React, { useState } from "react";
import axios from 'axios'

const NewTodoForm = ({_id}) => {
    const [text, setText] = useState("");

    const handleChange = event => {
      setText(event.target.value);
    };
  
    const handleSubmission = event => {
      const newObject = { text: text, pomoCount: 0 }
      //TODO use axios here to call the server with post
      axios.post('http://localhost:3010/api/taskLists/',{_id,text})
      // console.log({_id,text});
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