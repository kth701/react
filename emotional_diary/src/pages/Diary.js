import { useParams, useSearchParams } from "react-router-dom";
import  useDiary  from "../hooks/useDiary";

const Diary = () => {
  const { id } = useParams();//  url path에 설정된 매개변수 값을 가져오는 객체 
  const data = useDiary(id);


  return (
    <div>
      {/* <div>{id}번 일기</div>
      <div>{name}님, {age}세</div>
      <div>Diary 페이지입니다.</div>
       */}
    </div>
  );
}

export default Diary;


// const { id } = useParams();//  url path에 설정된 매개변수 값을 가져오는 객체 
// const [ searchParams, setSearchParams] = useSearchParams();

// const name = searchParams.get("name");
// const age = searchParams.get("age")

// console.log("Diary 컴포넌트 URL 파라미터 값 가져오기:",id)
// console.log("쿼리 스트링 값 추출하기: ", name)
// console.log("쿼리 스트링 값 추출하기: ", age)