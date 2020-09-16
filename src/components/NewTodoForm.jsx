import React, { useState } from "react";

const NewTodoForm = (props) => {
    const [inputText, setInputText] = useState("");

    const handleChange = event => {
      setInputText(event.target.value);
    };
  
    const handleSubmission = event => {
      const newObject = { text: inputText, pomoCount: 0 }
      console.log(props);
      setInputText("");
      event.preventDefault();
    };
  
    return (
      <form onSubmit={handleSubmission}>
        <input type="text" onChange={handleChange} value={inputText} />
      </form>
    );
  };
  
  export default NewTodoForm