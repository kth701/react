
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'

import { useState } from "react"


function App() {
  // 멤버 변수
  const [count, setCount] = useState(0)
  // 함수 선언
  const handleSetCount = (value )=> {
    setCount(count+value)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="alert alert-light">
          <h1>Simple Counter</h1>
        </div>
        <section>
          <Viewer count={count}/>
        </section>
        <section>
          <Controller  handleSetCount={handleSetCount}/>
        </section>
      </div>
    </div>
  );
}

export default App;
