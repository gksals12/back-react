// 이름을 콘솔에 출력해주는 함수를 만들어서 Props로 넘기고,
// PropsComponent03에서 사용하기
import React from 'react';

const PorpsComponent03 = (props) => {
  console.log(props)
  props.printName("홍길동")
  return (
    <div>
    </div>
  );
};

export default PorpsComponent03;