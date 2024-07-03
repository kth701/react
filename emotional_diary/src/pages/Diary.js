import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import  useDiary  from "../hooks/useDiary";

import Header from "../component/Header";
import Button from "../component/Button";
import { getFormattedDate} from "../util";
import  Viewer  from "../component/Viewer";

const Diary = () => {
  const { id } = useParams();//  url path에 설정된 매개변수 값을 가져오는 객체 
  const data = useDiary(id);

  // 로딩 지연으로 의한 오류발생 : data는 undefined으로 인식됨.
  // console.log("찾고자하는 일기 데이터:",data)
  // const {date, emotionId, content} = data;
  // const title = `${getFormattedDate(new Date(Number(date)))} 기록`;

  const navigate = useNavigate();
  const goBack = () =>{
    navigate(-1)
  }
  // 수정작업처리한 컴포넌트 연결
  const goEdit = () =>{
    console.log('수정, id:',id)
    navigate(`/edit/${id}`)
  }



  if(!data){ // 데이터가 존재하지 않으면
    return <div>일기를 불오고 있습니다...</div>
  } else {
    // 데이터 정상적으로 존재할 경우에 구조분할 할당
    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
  
    return (
      <div>
        <Header 
          title={title}
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
          rightChild={<Button type="danger" text={"수정하기"} onClick={goEdit} />}
        />

        <Viewer  content={content} emotionId={emotionId} />


        {/* <div>{name}님, {age}세</div> */}
      </div>
    );
  }// end if
}

export default Diary;


// const { id } = useParams();//  url path에 설정된 매개변수 값을 가져오는 객체 
// const [ searchParams, setSearchParams] = useSearchParams();

// const name = searchParams.get("name");
// const age = searchParams.get("age")

// console.log("Diary 컴포넌트 URL 파라미터 값 가져오기:",id)
// console.log("쿼리 스트링 값 추출하기: ", name)
// console.log("쿼리 스트링 값 추출하기: ", age)