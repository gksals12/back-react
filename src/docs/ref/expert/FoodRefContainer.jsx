import React, { useRef, useState } from 'react';

const FoodRefContainer = () => {

  const [krFoodName, setKrFoodName] = useState("")
  const [engFoodName, setEngFoodName] = useState("")

  const [foodList, setFoodList] = useState([])

  const krRef = useRef()
  const engRef = useRef()

  // const getKrFoodName = (data) =>{
  //   if(data.key === 'Enter'){
  //     // console.log(data.target.value)
  //     setKrFoodName(data.target.value)
  //   }
  // }

  // const getEngFoodName = (data) =>{
  //   if(data.key === 'Enter'){
  //     // console.log(data.target.value)
  //     setEngFoodName(data.target.value)
  //   }
  // }

  const remove = () => {
    // console.log("check remove btn")
    setKrFoodName("")
    setEngFoodName("")
  }

  const add = () => {
    setKrFoodName(krRef.current.value)
    setEngFoodName(engRef.current.value)
    // console.log(krRef.current.value)
    // console.log(engRef.current.value)
    // console.log(krRef)
    // console.log(engRef)
    const temp1 = krRef.current.value
    const temp2 = engRef.current.value
    setFoodList([...foodList, [temp1, temp2]])
  }

  return (
    <div>
      <input type="text" placeholder='한글 음식 이름' ref={krRef}/>
      <input type="text" placeholder='영어 음식 이름' ref={engRef}/>
      <button onClick={add}>추가</button>
      <button onClick={remove}>삭제</button>
      <ol>
        {foodList.map((data, index) => {
          return(
            <li key={index}>
              <input type="checkbox" />
              {data[0]}
              <span>{data[1]}</span>
          </li>
          )
        })}
      </ol>
    </div>
  );
};

export default FoodRefContainer;

