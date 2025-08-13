import React from 'react';

const Jsx04 = () => {
  const name = undefined || "초기값"
  const login = true
  const guest = true
  return (
    // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 사용한다
    // 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
    // 저건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력하지 않는다
    // && 연산자는 앞의 조건식이 false라면 뒤를 실행하지 않으며, false라는 값은 랜더링 되지 않는다
    <div>
      {/* guest login */}
      {login && guest && (<p>비회원 로그인입니다</p>)}
      {/* if login === false */}
      {/* print 로그인 실패 */}
      {login ? (<>{name}님환영합니다</>) : (<>로그인실패</>)} 
    </div>
  );
};

export default Jsx04;