import React, {useRef, useState} from 'react';

const CheckBoxRef = () => {
  const [result, setResult] = useState("")
  const inputRef = useRef([])
  const printHobby = () => {
    console.log(inputRef.current)
    // inputRef.current.forEach((input) => console.log(input.checked))
    // inputRef.current.forEach((input) => console.log(input.value))
    let hobby = ""
    inputRef.current.forEach((data, index, arr) => {
      if(data.checked){
        hobby += index === arr.length - 1 ? data.value : data.value + ", "
      }
    })
    setResult(hobby)
  }

  return (
    <div>
      <p>{result}</p>
      <label>
        <span>축구</span>
        <input type="checkbox" name="hobby" ref={(el) => inputRef.current[0] = el} value="축구" />
      </label>
      <label>
        <span>야구</span>
        <input type="checkbox" name="hobby" ref={(el) => inputRef.current[1] = el} value="야구" />
      </label>
      <label>
        <span>농구</span>
        <input type="checkbox" name="hobby" ref={(el) => inputRef.current[2] = el} value="농구" />
      </label>
      <button onClick={printHobby}>취미 확인하기</button>
    </div>
  );
};

export default CheckBoxRef;