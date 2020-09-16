import React from 'react';

const TodoList = ({ todoArray }) => {
    //todo, convert list into datas
    const todoList = todoArray.map(({text}) =>
      <li>
        {text}
            {/* <PomoCountBox number={element.pomoCount} /> */}
      </li>
    );
    return <ul>{todoList}</ul>;
  };

  export default TodoList