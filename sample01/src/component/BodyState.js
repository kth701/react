/*
State 상태 관리

컴포넌트 : 값이 변하지 않는 상태
           값이 변하는 상태(동적)

useState이 이용 생성
const [상태변수, set함수] = useState(초기값)

*/

import {useState} from "react";


function BodyState() {
   const name = "길순이" /* 변하지않는 상태 */
   
   const [count, setCount] = useState(0)

   const onIncrease = () => {
    setCount(count+1)
   }
  //  function onIncrease() {
  //   console.log('1씩 증가')
  //  }


  // input 요소 변경시 
  const [text, setText] = useState("")
  const inputOnChange = (e) => {
    setText(e.target.value) /* text = e.target.value */
    
    //console.log(e.target.value)
  }

  // 날짜 변경시
  const dateOnChange = () =>{
    console.log('date change...')
  }

  return(
    <div>
      <h2>이름: {name}</h2>
      <hr/>
      <h1>useState로 관리하는 count변수</h1>
      <h2>{count}</h2>
      <button onClick={onIncrease}>1씩 증가</button>

      <hr />
      <input type="text" onChange={inputOnChange} value="" />
      <div>{text}</div>
      <hr />
      <input type="date" value="" onChange={dateOnChange} />
    </div>
  )
}

export default BodyState;
