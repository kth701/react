import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  // App컴포넌트에서 생성 공통객체를 사용
  const data = useContext(DiaryStateContext);
  const [diary, setDiary] = useState();
  const navigate = useNavigate(); 

  useEffect( ()=>{
    const matchDiary = data.find( (it)=> String(it.id) == String(id) )
    if (matchDiary){
      setDiary(matchDiary)
    } else {
      alert("일기가 존재하지 않습니다.");
      navigate("/", {replace:true})
    }
  }, [id, data]);

  return diary;
}

export default useDiary;
/*
커스텀 훅: 개발작가 직접 만들어 사용
: 여러 컴포넌트에서 동일하게 사용하는 기능을 별도 파일로 분리
*/