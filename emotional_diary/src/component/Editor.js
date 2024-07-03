import {useState, useEffect, useCallback} from "react";
import {emotionList, getFormattedDate} from "../util";
import Button from "./Button";
// 브라우저의 뒤로가기 - 이전 페이지 이동
import {useNavigate} from "react-router-dom";
import EmotionItem from "./EmotionItem";

import "./Editor.css";


const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();

  // 변수(값이 변하는)
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content:""
  })

  // 의존성배열값이 변경될 때마다 콜백함수 수행
  // new Date(parseInt(initData.date) : 타임스템프형식을 Date객체로 변환
  useEffect( ()=>{
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date)))
      })
    }
  }, [initData]);

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

  // 뒤로 가기(이전 페이지 이동) 함수
  const handleOnGoBack = () => {
    navigate(-1)
  }

  const handleSubmit = () => {
    console.log("==> 작성완료")
    // console.log("==>"+onSubmit)
    onSubmit(state)
  }

  // 최적화 미적용
  //  const handleChangeEmotion = (emotionId)=> {
  //   setState({
  //     ...state,
  //     emotionId
  //   })
  //  }

   // 최적화 적용 : useCallback()
   const handleChangeEmotion = useCallback(  (emotionId)=> {
    setState({
      ...state,
      emotionId
    })
   }, [] )


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
        <div className="input_wrapper emotion_list_wrapper">
          {
            emotionList
                .map( (it) => (
                      // (<img key={it.id} alt={`emotion${it.id}`} src={it.img}/>)
                      <EmotionItem 
                            key={it.id} 
                            {...it} // it.id, it.img, it.name 전달
                            onClick={handleChangeEmotion} 
                            isSelected={state.emotionId === it.id} />
                    )
                  )
          }

        </div>
      </div>
      <div>
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea 
              placeholder="오늘은 어땠나요?"
              value={state.content} 
              onChange={handleChangeContent}/>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center ">
        <Button text={"취소하기"} type={"danger"}   onClick={handleOnGoBack}/>
        <Button text={"작성완료"} type={"success"}  onClick={handleSubmit}/>
      </div>

    </div>
    )
}

export default Editor;