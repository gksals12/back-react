import React from 'react';
import useInput from '../../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeFontSize } from '../../../modules/font';

const FontChanger = () => {
  const[value, setValue, onChangeValue] = useInput("")
  const[color, setColor, onChangeColor] = useInput("")
  const dispatch = useDispatch()

  const style = useSelector((state) => state.font)
  return (
    <div>
      <p style={style}>
        {value}
      </p>
      <div>
        <input type="text" value={value} onChange={onChangeValue} />
        <button onClick={() => {dispatch(changeFontSize())}}>100px크기로 변경</button>
      </div>
      <div>
        <input type="text" placeholder='컬러를 입력하세요' onChange={onChangeColor}/>
        <button onClick={() => {dispatch(changeColor(color))}}>컬러를 변경</button>
      </div>
    </div>
  );
};

export default FontChanger;