import { useParams, useSearchParams } from "react-router-dom";


const Diary = () => {
  const {id} = useParams();
  const [ searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  const age = searchParams.get("addr")

  console.log("Diary 컴포넌트 URL 파라미터 값 가져오기:",id)
  console.log("쿼리 스트링 값 추출하기: ", name)
  console.log("쿼리 스트링 값 추출하기: ", age)

  return (
    <div>
      <div>{id}번 일기</div>
      <div>{name}님, {age}세</div>
      <div>Diary 페이지입니다.</div>
      
    </div>
  );
}

export default Diary;