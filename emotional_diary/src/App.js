import {Routes, Route} from "react-router-dom";


// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// 리소스 임포트 방식
// import { getEnmotionImgById} from "./util";
// import emotion5 from "./img/emotion5.png";

// 라우팅 할 페이지 가져오기
import Home from  "./pages/Home";
import New  from  "./pages/New";
import Edit from  "./pages/Edit";
import Diary from "./pages/Diary";  

function App() {

  return (
    <div className="App myfont ">
      <div className="container border border-4 my-3 p-3">
        <div className="contents ">
          {/* 이미지 리소스
          <div>
            <img src={emotion5} />
            <img src={getEnmotionImgById(1)} />
            <img src={getEnmotionImgById(2)} />
          </div> */}
          
          <Routes >
            <Route path="/"     element={<Home />} />
            <Route path="/new"  element={<New />} />
            {/* 동적 경로 설정 */}
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>

      </div> 
    </div>
  );
}

export default App;


