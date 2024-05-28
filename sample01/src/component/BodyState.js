/*
State 상태 관리

컴포넌트 : 값이 변하지 않는 상태
           값이 변하는 상태(동적)

useState이 이용 생성
const [상태변수, set함수] = useState(초기값)
const [getter, setter] = useState(초기값)

*/

import {useState} from "react";


function BodyState() {
  // 상수
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
  const [date, setDate] = useState("")
  const dateOnChange = (e) =>{
    setDate(e.target.value)
    //console.log(e.target.value)
  }

  // select 선택 변경시
  const [option, setOption] = useState("")
  const selectOnChange = (e) => {
    setOption(e.target.value)
    console.log(e.target.value)
  }

  // textarea 
  const [text2, setText2] = useState("")
  const textareaOnChange = (e) => {
    setText2(e.target.value)
    console.log(e.target.value)
  }

  return(
    <div>
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
        <input type="date" value={date} onChange={dateOnChange} />

        <hr />
        <select value={option} onChange={selectOnChange} >
          <option key="1번">1번</option>
          <option key="2번">2번</option>
          <option key="3번">3번</option>
        </select>

        <hr />
        <textarea value={text2} onChange={textareaOnChange}></textarea>
      </div>

    </div>
  )
}

export default BodyState;
