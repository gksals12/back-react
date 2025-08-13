import React, { useEffect, useState } from 'react';

const SideEffectTask = () => {

  const [number, setNumber] = useState(0)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // https://jsonplaceholder.typicode.com/todos/
  // number가 증가할 때 마다 데이터를 요청하는 코드 만들기
  // 데이터를 요청 후 화면에 출력
  useEffect(() => {
   const getTodos = async () => {
      try {
        const dataLength = 10 * number
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${dataLength}&_limit=10`)
        console.log(response)
        if(!response.ok) throw new Error(`${response} todos datas fetch Error`)
        const datas = await response.json()
        if(!datas.length) throw new Error(`todos 데이터가 없습니다.`)
        return datas
      } catch (error) {
        console.error(`${error.message}`)
        console.error("getTodos fetching error")
      }
    }
    
    getTodos()
      .then((datas) =>{
        setData(datas)
        setLoading(false)
      })
      .catch((err) =>{
        setLoading(true)
      })
  }, [number])

  const dataList = data.map((data, index) => {
    return(
      <p key={index}>{data.title}</p>
    ) 
  })

  if(loading) return(
    <div>로딩중</div>
  )

  const increase = () => setNumber(number + 1)

  console.log({data})
  return (
    <div>
      <button onClick={increase}>num</button>
      <span>{number}</span>
      <h1>{dataList}</h1>
    </div>
  );
};

export default SideEffectTask;


// import React, { useEffect, useState } from 'react';

// const SideEffectTask = () => {
//   const [number, setNumber] = useState(0)
//   const [todos, setTodos] = useState([])
  
//   useEffect(() => {
//     const getTodos = async () => {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
//         console.log(response)
//         if(!response.ok) throw new Error(`${response} todos datas fetch Error`)
//         const todos = await response.json()
//         if(!todos.length) throw new Error(`todos 데이터가 없습니다.`)
//         return todos
//       } catch (error) {
//         console.error(`${error.message}`)
//         console.error("getTodos fetching error")
//       }
//     }
    
//     getTodos().then(setTodos)
//   }, [number])

//   const todoList = todos.slice(0, 10).map(({title}, i) => <li key={i}>{title}</li>)

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={() => setNumber(number + 1)}>+1</button>
//       <ul>
//         {todoList}
//       </ul>
//     </div>
//   );
// };

// export default SideEffectTask;