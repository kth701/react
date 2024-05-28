import { useState} from "react"

// 자식 컴포넌트 
function Viewer( {number}) {
  return <div>
    {number % 2 == 0 ? <h3>짝수</h3> : <h3>홀수</h3>}
  </div>

}
function Viewer2() {
  console.log("View component update!!!!")
  return <div>
    Viewer
  </div>

}

// 부모 컴포넌트
function BodyStateProp(){
  // 상태 변수 선언
  const [number, setNumber] = useState(0);

  // 이벤트 핸들러
  const onDescrease = () =>{
    // setNumber()함수로 number값을 변경
    setNumber(number-1) // number=number-1 결과
  }
  const onIncrease = () => {
    setNumber(number+1)
  }

  return(
    <div>
      <h1>BodyStateProp</h1>
      <h3>number: {number}</h3>

      {/* 자식 컴포넌트 */}
      <Viewer number={number}  />
      <Viewer2  />
      <hr />
      <div>
        <button onClick={onDescrease}>감소</button>
        <button onClick={onIncrease}>증가</button>
      </div>
    </div>
  );
}

export default BodyStateProp;