import {useState} from "react";
import {getFormattedDate} from "../util";
import Button from "./Button";

const Editor = ({initData, onSubmit}) => {
  // 변수(값이 변하는)
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content:""
  })

  // 함수(기능수행)
  const handleChangeDate = (e) => {
    setState({
      ...state,
      // input에서 변경한 날짜를 state.date값으로 설정
      date: e.target.value
    });
    
  }

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value
    })
  }

  const handleSubmit = () => {
    onSubmit(state)
  }


  return (
    <div className="Editor">
      <div>
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" 
                 value={state.date}
                 onChange={handleChangeDate} />  
        </div>

      </div>
      <div>
        <h4>오늘의 감정</h4>
        <div className="input_wrapper">
          <textarea 
              placeholder="오늘은 어땠나요?"
              value={state.content} 
              onChange={handleChangeContent}/>
        </div>
      </div>
      <div>
        <h4>오늘의 일기</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <Button text={"취소하기"} type={"danger"} />
        <Button text={"작성완료"} type={"success"} onClick={handleSubmit}/>
      </div>

    </div>
    )
}

export default Editor;