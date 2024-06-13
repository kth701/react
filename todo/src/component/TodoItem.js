import './TodoItem.css';


const TodoItem =  ( {id, content, isDone, createdDate}) => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col form-check form-switch">
        <input type="checkbox"
              checked={isDone}
              className="form-check-input" />
      </div>
      <div className="title_col">
        {content}
      </div>
      <div className="date_col">
        { new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button className="btn btn-outline-danger btn-sm">삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;