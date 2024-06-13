import './TodoList.css'
import TodoItem from './TodoItem.js'
import { useState } from "react";

const TodoList = ( {todo, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value)

    console.log("search: ",search)
  }
  // 검색 필터 함수
  const getSearchResult = () => {
    return search === "" 
              ? todo 
              : todo.filter( (it) => it.content.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="TodoList">
      <h5>Todo List 🎄</h5>
      <div className="search_wrapper">
        <input className="form-control me-2" 
               value={search}
               onChange={onChangeSearch}
               type="Search" 
               placeholder="검색어를 입력하세요" />
      </div>
      <div className="list_wrapper">
          {/* {todo.map( (it) =>  <div>{it.content}</div>)} */}
          
          {/* todo 할일 아이템 전체 list */}
          {/* {todo.map( (it) => <TodoItem key={it.id} {...it} />)} */}
          {getSearchResult().map( (it) => ( 
                      <TodoItem 
                          key={it.id} 
                          {...it} 
                          onUpdate={onUpdate}
                          onDelete={onDelete}
                          />
                      ))}

      </div>
    </div>
  );
}

export default TodoList;
