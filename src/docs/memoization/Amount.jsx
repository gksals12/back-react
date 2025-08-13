import React from 'react';

const Amount = ({ divStyle, buttonStyle, amountMemo, couponMemo, addAmountCallback, subtractAmountCallback, addCouponCallback, subtractCouponCallback }) => {

  console.log("자식 랜더링")

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={subtractAmountCallback}>-</button>
      <p>수량: {amountMemo}</p>
      <button style={buttonStyle} onClick={addAmountCallback}>+</button>
      <button style={buttonStyle} onClick={subtractCouponCallback}>-</button>
      <p>쿠폰: {couponMemo}</p>
      <button style={buttonStyle} onClick={addCouponCallback}>+</button>
    </div>
  );
};

export default Amount;