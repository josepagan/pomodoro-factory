import React, { useState } from "react";

const Todo = () => {
  // here it is todo form, I have to create a component out of this TodoForm
  // and of course refactor
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleSubmission = event => {
    // const newObject = {};
    // newObject.text = inputText;
    // newObject.pomoCount = 0;
    const newObject = {text: inputText, pomoCount: 0}
    setTodoArray([...todoArray, newObject]);
    event.preventDefault();
  };
  
  return (
    <div>
      <TodoList todoArray={todoArray} />
      <NewTodoForm
        inputText={inputText}
        handleChange={handleChange}
        handleSubmission={handleSubmission}
      />
    </div>
  );
};

const TodoList = ({ todoArray }) => {
  const todoList = todoArray.map(element => 
  <li>{element.text}<PomoCountBox number={element.pomoCount}/></li>
  );
  return <ul>{todoList}</ul>;
};

const PomoCountBox = ({number}) => number

const NewTodoForm = ({ inputText, handleChange, handleSubmission }) => {
  return (
    <form onSubmit={handleSubmission}>
      <input type="text" onChange={handleChange} value={inputText} />
    </form>
  );
};

export default Todo;
