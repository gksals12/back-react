import React from 'react';

const Jsx05Copy = () => {

  // age를 상수 나이로 설정한다
  const age = 20
  // 19세 초과 성인이라면 입장가능
  // 성인이 아니라면 입장불가
  const isAdult = age > 19
  // 성인과 관계없이 age가 짝수라면 당첨
  const isEven = age % 2 === 0

  // 화면에 랜더링
  return (
    <div>
      {isAdult ? <p>입장가능</p> : <p>입장불가</p>}
      {isEven ? <p>당첨</p> : <p>꽝</p>}
    </div>
  );
};

export default Jsx05Copy;