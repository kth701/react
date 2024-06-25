

import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "lastest", name: "최신순"},
  { value: "oldeset", name: "오래된순"},
];


// DiaryList 컴포넌트: 
const DiaryList = ({ data }) => {
  const navigate = useNavigate(); // url요청시 페이지 이동
  
  const [sortType, setSortType] = useState("lastest");  // 정렬 타입
  const [sortedData, setSortedData] = useState([]);     // 정렬 결과 저장

  // data, dataType이 변경될 때마다 콜백함수(정렬처리) 수행
  useEffect(()=>{
    // 첫번째 인자: 수행할 콜백 함수 정의
    const compare = (a,b) => {
    
      if(sortType === "lastest") {
        return Number(b.date) - Number(a.date) // 내림차순
      } else {
        return Number(a.date) - Number(b.date) // 오름차순
      }

    };// compare() 통해 정렬처리
    
    const copyList = JSON.parse(JSON.stringify(data));//  배열복사
    copyList.sort(compare);// 복사한 배열을 정렬처리
    setSortedData(copyList);// 정렬된 결과를 저장
  } , 
  // 두번째 인자 : 의존성 배열
  [data, sortType]); // useEffect()

  // 쓰기
  const onClickNew = () => {
    navigate("/new");
  }
  // select객체 값변경시
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  return (
    <div className="DiaryList">
      리스트
      <div className="menu_wrapper">
        <div className="left">
          <select className="form-select form-select-lg mb-3 sortType"
            value={sortType} onChange={onChangeSortType}>
            {
              sortOptionList
                  .map(  (it,idx) => 
                          (<option key={idx} value={it.value}>{it.name}</option>)
                  )
            }
          </select>
        </div>
        <div className="right">
          <Button type="danger" text={"새 일기 쓰기"} onClick={onClickNew} />
        </div>
      </div>
      <div className="list_wrapper">
        {
          sortedData.map( (it) => (<DiaryItem key={it.id} {...it} />))
        }
      </div>
    </div>
  );
}
export default DiaryList;