import {Routes, Route} from "react-router-dom";


// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEnmotionImgById} from "./util";

// 라우팅 할 페이지 가져오기
import Home from "./pages/Home";
import New  from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {

  return (
    <div className="App myfont text-center">
      <div className="container">

        <Routes >
          <Route path="/"     element={<Home />} />
          <Route path="/new"  element={<New />} />
          {/* 동적 경로 설정 */}
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>

      </div> 
    </div>
  );
}

export default App;


