import React, { useState } from "react";
import TodoList from "./TodoList";
import NewTodoForm from './NewTodoForm'

const Todo = ({ _id, tasks, tags, name }) => {
  const [todoArray, setTodoArray] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleChange = event => {
    setInputText(event.target.value);
  };

    return (
    <div>
      <TodoList todoArray={tasks} />
      <NewTodoForm
        _id={_id}
      />
    </div>
  );
};

export default Todo;