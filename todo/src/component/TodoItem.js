import './TodoItem.css';


const TodoItem =  ( {id, content, isDone, createdDate, onUpdate, onDelete}) => {

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

export default TodoItem;