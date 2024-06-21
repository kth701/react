import { useParams } from "react-router-dom";


const Diary = () => {
  const {id} = useParams();
  console.log("Diary 컴포넌트 URL 파라미터 값 가져오기:",id)

  return (
    <div>
      <div>{id}번 일기</div>
      <div>Diary 페이지입니다.</div>
    </div>
  );
}

export default Diary;