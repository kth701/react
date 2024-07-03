import { useNavigate } from "react-router-dom";
import React from "react";

import { getEnmotionImgById} from "../util";
import "./DiaryItem.css";
import Button from "./Button"

const DiaryItem = ({id, emotionId, content, date}) => {

  console.log("DiaryItem id:"+id)

  const navigate = useNavigate();
  
  const goDetail = () => {
    navigate(`/diary/${id}`) // "http://localhost:3000/diary/1"
  }
  const goEdit = ()=> {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="DiaryItem">
      {/* {new Date(parseInt(date)).toLocaleDateString() } - {content} */}
      <div  
          onClick={goDetail}
          className={["img_section", `img_section_${emotionId}`].join(" ")} > 
        <img alt={`emotion${emotionId}`} src={getEnmotionImgById(emotionId)} />
      </div>

      <div className="info_section">
        <div className="date_wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content_wrapper">
          {content.slice(0, 25)}
        </div>
      </div>

      <div className="button_section">
        <Button onClick={goEdit} text={"수정하기"}/>
      </div>


    </div>
  );
}

// export default DiaryItem;
// 부모컴포턴트가 Prop가 없으면 렌더하지 않음
export default React.memo(  DiaryItem );