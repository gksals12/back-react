import React, { useState } from 'react';
import S from './style';

const Styled04 = () => {
  const red = "red"
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")
  const onChangeValue = (e) => setValue(e.target.value)
  const handleColor = (e) => {
    if(e.key === 'Enter'){
      setColor(value)
    }
  }
  return (
    <div>
      <input type="text" onChange={onChangeValue} onKeyDown={handleColor}/>
      <S.H104 color={color}>컬러가적용될폰트</S.H104>
      {/* <S.P04 fontColor={red}>스타일드 컴포넌트</S.P04> */}
    </div>
  );
};

export default Styled04;