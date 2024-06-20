import "./TodoEditor.css";
import { useState, useRef } from "react";


const TodoEditor = ({onCreate}) => {
  const [content, setContent] = useState("")
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value)
    
    //console.log(content)
  }
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    
    onCreate(content); // 아이템 추가
    setContent("");; // 입력란은 초기화

  }
  const onKeyDown = (e) => {
    if (e.keyCode == 13){
      onSubmit();
    }
  }

  return (
    <div className="TodoEditor border border-success-subtle p-3 rounded-2 ">
      <h5>새로운 Todo 작성하기 🖍</h5>

      <div className="edit_wrapper">
        <input className="Edit form-control border-success"
                type="search"
                placeholder="새로운 Todo...." 

                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                ref={inputRef}
                />
        <button onClick={onSubmit}
                className="Add btn btn-success">추가</button>
      </div>
    
    </div>
  );
};

export default TodoEditor;