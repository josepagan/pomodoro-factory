import React, { useState } from "react";

const Todo = () => {
  const [todoArray, setTodoArray] = useState(["wtf", "omg", "bbq"]);
  return (
    <div>
      <TodoList todoArray={todoArray} />
      <NewTodo />
    </div>
  );
};

const TodoList = ({ todoArray }) => {
  const todoList = todoArray.map(element => <li>{element}</li>);
  return <ul>{todoList}</ul>;
};

const NewTodo = () => {
  return (
    <form>
      <input type="text" />
    </form>
  );
};

export default Todo;
