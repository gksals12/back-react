import React, { useState } from 'react';
import getTodos from './getTodos';
import fetchTodo from './fetchTodo';

const TodoInsert = ({todos, handleTodos, setHandleTodos}) => {

  const [value, setValue] = useState("")

  const onChangeValue = (e) =>{
    setValue(e.target.value)
  }

  const insertTodo = async (e) => {
    if(e.key === 'Enter'){

      if(!window.confirm(`이대로추가하시겠습니까`)) return;

      const insertOptions = {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        // JSONL JSON프로토타입
        // stringfy():JSON객체로 변환한 값을 리턴
        body : JSON.stringify({
          id : (todos.length + 1).toString(),
          title : value,
          isChecked : false
        })
      } 
        
      fetchTodo('http://localhost:4000/todo', insertOptions)
      .then((res) =>{
        if(!res.ok) return alert("알 수 없는 오류");
        alert(`할 일 추가 완료`)
        setHandleTodos(!handleTodos)
      })
      .catch(console.error)
      console.log(value)
      // POST(url, method, type)
  }
}

  return (
    <div>
      <input type="text"
        onChange={onChangeValue}
        onKeyDown={insertTodo} 
        placeholder='오늘 할 일 추가' />
    </div>
  );
};

export default TodoInsert;