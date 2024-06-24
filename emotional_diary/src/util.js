
import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// 이미지 리소스 추출하는 함수
export const getEnmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  
  switch (targetEmotionId) {
    case "1": return emotion1;
    case "2": return emotion2;
    case "3": return emotion3;
    case "4": return emotion4;
    case "5": return emotion5;
  
    default:
      return null;
  }

}

export const emotionList = [
  {id:1, name:"완전 좋음",  img: getEnmotionImgById(1)},
  {id:2, name:"좋음",       img: getEnmotionImgById(2)},
  {id:3, name:"그럭저럭",   img: getEnmotionImgById(3)},
  {id:4, name:"나쁨",       img: getEnmotionImgById(4)},
  {id:5, name:"끔찍함",     img: getEnmotionImgById(5)},
];


 // 처음 렌더링할 때 오늘날짜를 yyyy-mm-dd형식으로 출력
 export const getFormattedDate = (targetDate) => {
  let year  = targetDate.getFullYear();
  let month = targetDate.getMonth()+1;
  let date  = targetDate.getDate();

  console.log("---")
  console.log(year, month, date)
  if (month < 10) {
    month = `0${month}`
  }
  if (date < 10) {
    date = `0${date}`
  }
  console.log(year, month, date)

  return `${year}-${month}-${date}`;

 }  