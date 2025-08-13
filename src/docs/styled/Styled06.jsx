import React from 'react';
import S from './style';

const Styled06 = () => {
  return (
    <div>
      <S.Form06>
        <S.Wrap06>
          <span>아이디</span>
          <input type="text" />
        </S.Wrap06>
        <S.Wrap06>
          <span>비밀번호</span>
          <input type="password" />
        </S.Wrap06>
        <button type='button'>전송</button>
      </S.Form06>
    </div>
  );
};

export default Styled06;