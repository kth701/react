
const DiaryItem = ({id, emotionId, content, date}) => {

  return (
    <div>
      {new Date(parseInt(date)).toLocaleDateString() } - {content}
    </div>
  );
}

export default DiaryItem