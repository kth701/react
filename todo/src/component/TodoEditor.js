import "./TodoEditor.css";


const TodoEditor = () => {
  return (
    <div className="TodoEditor border border-success-subtle p-3 rounded-2 ">
      <h5>새로운 Todo 작성하기 🖍</h5>

      <div className="edit_wrapper">
        <input className="form-control border-success"
                placeholder="새로운 Todo...." />
        <button className="btn btn-success">추가</button>
      </div>
    
    </div>
  );
};

export default TodoEditor;