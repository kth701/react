import './TodoItem.css';
import React, { useContext} from 'react';
// import {TodoContext} from "../App";
import {TodoDispatchContext} from "../App";



// const TodoItem =  ( {id, content, isDone, createdDate, onUpdate, onDelete}) => { // Props로 통해 값을 전달 받음
const TodoItem =  ( {id, content, isDone, createdDate}) => {  

  // const { onUpdate, onDelete } = useContext(TodoContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  console.log(`TodoItem 컴포넌트: ${id} - 업데이트`);

  const onChangeCheckbox  = () => { onUpdate(id) }
  const onClickDelete     = () => { onDelete(id) }

  return (
    <div className="TodoItem">
      <div className="checkbox_col form-check form-switch">
        <input type="checkbox"
              checked={isDone}
              onChange={onChangeCheckbox}
              className="form-check-input" />
      </div>
      <div className="title_col">
        {content}
      </div>
      <div className="date_col">
        { new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}
            className="btn btn-outline-danger btn-sm">삭제</button>
      </div>
    </div>
  );
}

export default  React.memo(TodoItem);