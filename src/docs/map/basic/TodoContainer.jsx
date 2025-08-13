import React from 'react';

const TodoContainer = () => {

  // todata 이용해서 화면에 done이 true인 todo 데이터만 출력하기

  const todoData = [
    { id: 1, task: "React 공부하기", done: false},
    { id: 2, task: "운동하기", done: true},
    { id: 3, task: "장보기", done: false},
    { id: 4, task: "점심 먹기", done: false},
    { id: 5, task: "코딩하기", done: true}
  ]

  const todoList = todoData
    .filter((data, i) => data.done === true)
    .map((data, i) => {
      return(
        <li key={i}>{data.task}</li>
      )
    })

  return (
    <ul>
      {todoList}
    </ul>
  );
};

export default TodoContainer;