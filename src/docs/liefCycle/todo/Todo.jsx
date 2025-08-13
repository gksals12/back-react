import React, { useState } from 'react';

const Todo = ({todo, handleTodos, setHandleTodos}) => {
  const {id, title, isChecked, userId} = todo;
  console.log(todo)
  
  const [value, setValue] = useState(title)
  const onChangeValue = (e) => setValue(e.target.value)

  const [isEdit, setEdit] = useState(false)
  const handleEdit = () => setEdit(!isEdit)

  // Create : POST
   // Read : GET
   // Update : PUT
   // Delete : DELETE
  const remoteTodo = async () => {
    await fetch(`http://localhost:4000/todo/${id}`, {
      method : "DELETE"
    })
    .then((res) =>{
      if(!res.ok) return;
      setHandleTodos(!handleTodos)
    })
  }
  
  // 수정
  const updateTodo = async () => {
    await fetch(`http://localhost:4000/todo/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        ...todo,
        title : value,
      })  
    })
    .then((res) => {
      if(!res.ok) return; 
      setHandleTodos(!handleTodos)
      setEdit(!isEdit)
    })
    .catch(console.err)
  }

  // 완료상태(ischecked) 수정
  // 사용자가 체크박스를 클릭하면, isChecked상태가 true로 변경
  // true인 상태에서 다시 체크박스를 클릭하면 false로 변경
  // ischecked가 true라면, line-through 스타일적용
  // 완료 상태 토글
const onChangeCheck = async () => {
  await fetch(`http://localhost:4000/todo/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...todo,
      isChecked: !isChecked
    })
  })
  .then((res) => {
    if(!res.ok) return;
    setHandleTodos(!handleTodos)
  })
  .catch(console.error)
};


  
  return (
    <li>
      <input checked={isChecked} onChange={onChangeCheck} type="checkbox" />
      { isEdit ? <input value={value} onChange={onChangeValue} /> : <span style={{textDecoration : isChecked ? "line-through" : ""}}>{title}</span> }
      { isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={handleEdit}>수정</button> }
      <button onClick={remoteTodo}>삭제</button>
    </li>
  );
};

export default Todo;


// import React, { useState } from 'react';
// import fetchTodo from './fetchTodo';

// const Todo = ({todo, handleTodos, setHandleTodos}) => {
//   const {id, title, isChecked, userId} = todo;
//   console.log(todo)
  
//   const [value, setValue] = useState(title)
//   const onChangeValue = (e) => setValue(e.target.value)

//   const [isEdit, setEdit] = useState(false)
//   const handleEdit = () => setEdit(!isEdit)

//   const backEndUrl = `http://localhost:4000/todos/${id}`;

//   // Create : POST
//    // Read : GET
//    // Update : PUT
//    // Delete : DELETE
//   const updateTitleOptions = {
//       method: "PUT",
//       headers: {
//         'Content-Type' : 'application/json'
//       },
//       body : JSON.stringify({
//         ...todo,
//         isChecked : !isChecked,
//       })
//     }

//   const onChangeChecked = () => {
//     fetchTodo(backEndUrl, updateTitleOptions)
//       .then((res) => {
//         if(!res.ok) return; 
//         setHandleTodos(!handleTodos)
//       })
//   }
  
//   // 수정
//   const updateOptions = {
//     method: "PUT",
//     headers: {
//       'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify({
//       ...todo,
//       title : value,
//     })
//   }
  
//   const updateTodo = () => {
//     fetchTodo(backEndUrl, updateOptions)
//       .then((res) => {
//         if(!res.ok) return; 
//         alert('체크 수정 완료')
//         setHandleTodos(!handleTodos)
//       })
//   }
  
//   const removeOptions = {
//       method : "DELETE"
//   }

//   const removeTodo = () => {
//     fetchTodo(backEndUrl, removeOptions)
//       .then((res) => {
//         if(!res.ok) return; 
//         setHandleTodos(!handleTodos)
//       })
//   }

//   return (
//     <li>
//       <input type="checkbox" checked={isChecked} onChange={onChangeChecked}/>
//       { isEdit ? <input value={value} onChange={onChangeValue} /> : <span style={{textDecoration: isChecked ? "line-through" : ""}}>{title}</span> }
//       { isEdit ? <button onClick={updateTodo}>완료</button> : <button onClick={handleEdit}>수정</button> }
//       <button onClick={removeTodo}>삭제</button>
//     </li>
//   );
// };

// export default Todo;