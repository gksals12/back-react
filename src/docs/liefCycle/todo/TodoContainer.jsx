import React, { use, useEffect, useState } from 'react';
import getTodos from './getTodos';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {

  const [todos, setTodos] = useState([])
  const [handleTodos, setHandleTodos] = useState(false)

  useEffect(() => {
    getTodos("http://localhost:4000/todo")
      .then(setTodos)
      .catch(console.error)
  },[handleTodos])

  const todoList = todos.map((todo,i) => <Todo key={i} todo={todo} handleTodos={handleTodos} setHandleTodos={setHandleTodos} />)
  return (
    <div>
      <TodoInsert todos={todos} handleTodos={handleTodos} setHandleTodos={setHandleTodos} />
      <h1>남은 할일의 개수 : {todos.length && todoList.length}개</h1>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoContainer;