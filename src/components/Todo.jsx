import React, { useState } from "react";
import TodoTable from "./TodoTable";
import NewTodoForm from './NewTodoForm'

const Todo = ({ _id, tasks, tags, name }) => {
const [tasksState, setTasksState] = useState(tasks);
const pushNewTask = (newTask) => setTasksState([...tasksState, newTask])
    return (
    <div>
      <TodoTable todoArray={tasksState} />
      <NewTodoForm
        _id={_id}
        pushNewTask={pushNewTask}
      />
    </div>
  );
};

export default Todo;