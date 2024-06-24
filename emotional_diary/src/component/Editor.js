import {useState} from "react";


const Editor = ({initData, onSubmit}) => {
  // 변수(값이 변하는)
  const [state, setState]=useState({
    date: "",
    emotionId: 3,
    content:""
  })

  // 함수(기능수행)
  const handleChangeDate = () => {
    
  }


  return (
    <div className="Editor">
      <div>
        <h4>오늘의 날짜</h4>
        {state.date}, {state.content}
        state.emotionId = {state.emotionId}
      </div>
      <div>
        <h4>오늘의 감정</h4>
      </div>
      <div>
        <h4>오늘의 일기</h4>
      </div>
      <div>
        <h4>작성완료 버튼, 취소 버튼</h4>
      </div>

    </div>
    )
}

export default Editor;