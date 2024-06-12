import './TodoItem.css';


const TodoItem =  () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col form-check form-switch">
        <input type="checkbox"
              className="form-check-input" />
      </div>
      <div className="title_col">
        할 일
      </div>
      <div className="date_col">
        {new Date().toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button className="btn btn-outline-danger btn-sm">삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;