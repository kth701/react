// import {useState} from 'react';
import { useReducer} from 'react';

// action = {type:"INCREASE" , data: 1}
// dispath({type:"INCREASE" , data: 1})
function reducer(state, action){
  switch (action.type){
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
  }
  
}

const TestReducerComp = ()=>{
 // 반드시 컴포넌트 안에서만 사용 : useState()
  // const [count, setCount] = useState(100)

  // ----------------- //
  // 상태변화 코드 : State값을 변경하는 코드
  // ----------------- //
  // const onIncrease = () => { setCount(count+1)}
  // const onDecrease = () => { setCount(count-1)}
  // ----------------//

  const [count, dispath] = useReducer(reducer, 0);

  return (
    <div>
      <h3>useReducer 컴포넌트 테스트</h3>
      <div><h2>{count}</h2></div>
      <div>
        <button
          // onClick={onIncrease} 
          onClick={ ()=> dispath({type:"INCREASE" , data: 1})}
          className="btn btn-success btn-sm mx-2">1씩 증가</button>
        <button 
          // onClick={onDecrease}
          onClick= { () => dispath({type:"DECREASE", data:1})}
          className="btn btn-danger btn-sm">1씩 감소</button>
      </div>
    </div>
  );
}


// function TestReduceComp2() {
//   return (<div>

//   </div>);
// }
export default TestReducerComp;