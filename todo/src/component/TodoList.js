import './TodoList.css'
import TodoItem from './TodoItem.js'

const TodoList = ( {todo}) => {
  console.log(todo)

  return (
    <div className="TodoList">
      <h5>Todo List 🎄</h5>
      <div className="search_wrapper">
        <input className="form-control me-2" 
               type="Search" 
               placeholder="검색어를 입력하세요" />
      </div>
      <div className="list_wrapper">
          {/* {todo.map( (it) =>  <div>{it.content}</div>)} */}
          
          {todo.map( (it) => <TodoItem {...it} />)}


      </div>
    </div>
  );
}

export default TodoList;
