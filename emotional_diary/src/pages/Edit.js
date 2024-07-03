
import {useContext} from "react";
import { DiaryDispatchContext} from "../App";
import {useNavigate, useParams} from "react-router-dom";

import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";



const Edit = () => {
  const { onDelete, onUpdate} = useContext(DiaryDispatchContext);
  const {id } = useParams();// url매개변수에서 일기장 id
  const data = useDiary(id);// 일기장 유무 검색
  const navigate = useNavigate();
  console.log("Edit id값: ",id)

  const goBack = () => { navigate(-1)}
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.!")){
       onDelete(id);
       navigate("/", {repace: true})
    }
  }
  const onSubmit = (data)=>{
    if (window.confirm("일기를 정말 수정할까요?")){
      const { date, content, emotionId} = data;

      onUpdate(id, date, content, emotionId);
      navigate("/", {repace: true})
   }
  }

  return (
    <div className="Editor">
      <Header 
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={goBack} /> } 
        rightChild= {
          <Button 
            type={"danger"}
            text={"삭제하기"}
            onClick={onClickDelete}
          />
        }
      />

      <Editor initData={data} onSubmit={onSubmit} />
    </div>
    )
}

export default Edit;