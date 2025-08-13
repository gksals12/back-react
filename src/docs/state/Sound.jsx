import React, { useState } from 'react';

const Sound = () => {
  const [sound, setSound] = useState("사운드")

  const onClickToSound = (e) => {
    console.log(e.target.innerText)
    const target = e.target.innerText
    switch(target){
      case"고양이":
        setSound("야옹")
      break;
      case"강아지":
        setSound("멍멍")
      break;
      case"이태희":
        setSound("진구")
      break;
      default:
    }
  }
  return (
    <div>
      {sound}
      <div>
        <button onClick={onClickToSound}>고양이</button>
        <button onClick={onClickToSound}>강아지</button>
        <button onClick={onClickToSound}>이태희</button>
      </div>
    </div>
  );
};

export default Sound;