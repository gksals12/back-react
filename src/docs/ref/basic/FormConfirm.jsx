import React, { useRef } from 'react';

const FormConfirm = () => {

  const inputRef = useRef([])
  const formRef = useRef({})

  const onClickSubmit = () => {
    console.log(inputRef.current)
    console.log(inputRef.current[0].value)
    console.log(inputRef.current[1].value)
    inputRef.current.forEach((input) => {
      if(!input.value){
        return alert(`${input.name}값을 입력하세요`)
      }
      formRef.current.submit()
    })
  }

  return (
    <div>
      <form ref={formRef}>
        <div>
          <span>아이디</span>
          <input ref={(el) => inputRef.current[0] = el} type="text" name="id" />
        </div>
        <div>
          <span>비밀번호</span>
          <input ref={(el) => inputRef.current[1] = el} type="password" name="password" />
        </div>
        <button onClick={onClickSubmit} type='button'>전송</button>
      </form>
    </div>
  );
};

export default FormConfirm

