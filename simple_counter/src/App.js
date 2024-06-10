
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import Even from './component/Even'

import { useRef, useEffect, useState } from "react"


function App() {
  // 멤버 변수
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  // useRef: DOM 요소를 참조, 컴포넌트 변수
  const didMountRef = useRef(false);

  // 함수 선언
  const handleSetCount = (value )=> {
    setCount(count+value)
  }
  const handlechangeText = (e) => {
    setText(e.target.value);
  }

  // 리액트 컴포넌트의 라이프 사이클
  /*
  Mount(처음 페이지 표시) -> Update(State,Props, 부모컴포넌트 리렌더) -> Unmount(페이지에서 제거)
  */
 // 0. useEffect: 어떤 값이 변경될 때마다 특정 코드를 실행하는 리엑트 훅

//  useEffect(()=> {
//   console.log('useState 객체 값 업데이트:',count, text)
//   }, [count, text])

// 1. 두번째 인자 의존성 배열 생략시, 컴포넌트를 렌더링할 때마다 콜백함수 수행

  useEffect(()=> {
      // 2. useEffect에서 마운트시점은 제외하고 업데이트 시점에만 콜백함수
      if (!didMountRef.current){
        didMountRef.current = true;
        return;
      }else {
          console.log('컴포넌트 업데이트!![의존성 배열 생략]')
        }
    }) // end useEffect()
    // 3. useEffect에서 빈 배열을 전달 하면  마운트 시점에만 콜백함수 1번만 수행
    useEffect( ()=>{
      console.log('컴포넌트 마운트, 의존성 배열에 빈 배열전달')
    }, [])
    
    // 클린업(Cleanup)기능 : 특정 함수가 실행되고 종료된 후, 수행하고자 하는 내용이 있을 경우
    // useEffect(()=>{
    //   const intervalID = setInterval(() => {
    //     console.log("1초마다 깜박!!! ")
    //   }, 1000);

    //   return () => {
    //     console.log("클린업 기능 수행")
    //     clearInterval(intervalID);
    //   }
    // })

  return (
    <div className="App">
      <div className="container">
        <div className="alert alert-light">
          <h1>Simple Counter</h1>
        </div>
        <section className="alert alert-primary">
          <input className="form-control" value={text} onChange={handlechangeText} />
        </section>
        <section className="alert alert-warning">
          <Viewer count={count}/>
          {/* {조건식이 참이면 컴포넌트값으로 반환} */}
          {count % 2 == 0 && <Even />}
        </section>
        <section>
          <Controller  handleSetCount={handleSetCount}/>
        </section>
      </div>
    </div>
  );
}

export default App;
