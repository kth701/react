import "./DiaryList.css";
import Button from "./Button";

import {useState, useEffect} from "react";

const sortOptionList = [
  { value: "lastest", name: "최신순"},
  { value: "oldeset", name: "오래된순"},
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("lastest");
  const [sortedData, setSortedData] = useState([]);

  useEffect(()=>{
    // 첫번째 인자: 수행할 콜백 함수 정의
    const compare = (a,b) => {
    
    if(sortType === "lastest") {
        return Number(b.date) - Number(a.date)
      } else {
        return Number(a.date) - Number(b.date)
      }
    };
    
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);// 정렬
    setSortedData(copyList);
  } , 
  // 두번째 인자 : 의존성 배열
  [data, sortType]); // useEffect()


  return (
    <div className="DiaryList">
      리스트
      <div className="menu_wrapper">
        <div className="left">
          <select>
            {
              sortOptionList
                  .map(  (it,idx) => 
                          (<option key={idx} value={it.value}>{it.name}</option>)
                  )
            }
          </select>
        </div>
        <div className="right">
          <Button type="danger" text={"새 일기 쓰기"} />
        </div>
      </div>
      <div className="list_wrapper">
        리스트
      </div>
    </div>
  );
}
export default DiaryList;