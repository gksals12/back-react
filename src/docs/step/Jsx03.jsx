// 이름과, 나이, 만나이, 메세지를 만들고
// 화면에 랜더링시키기
export default function Jsx03(){
  // Jsx02랑 같음
  const name = "홍길동"
  const age = 20
  const realAge = age -1

  return(
    <>
      <p>이름: {name}, 나이: {age}, 만나이: {realAge}</p>  
    </>
  )
}