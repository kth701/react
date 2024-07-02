import "./Viewer.css";
import { emotionList } from "../util";


 const Viewer = ({content,emotionId}) => {
  
  // console.log("Viewer Prop: ",content+","+emotionId)
  const emotionItem = emotionList.find( (it) => it.id === emotionId)
  // console.log(emotionItem)

  return (
    <div className="Viewer">

      <section>
        <h4>오늘의 감정</h4>
        <div className="">
          <div >
            <img className={[`emotion_img_wrapper_${emotionId}`].join(" ")} src={emotionItem.img} alt={emotionItem.name} />  
          </div>
          <div className="emotion_descript">{emotionItem.name}</div>
        </div>

      </section>

      <section>
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
 }

 export default Viewer;