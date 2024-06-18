import './TodoList.css'
import TodoItem from './TodoItem.js'
import { useState , useMemo} from "react";

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

  // Todo 통계
  // 고차 컴포넌트 : 인수로 전달된 컴포넌트를 새로운 컴포넌트로 반환하는 함수
  // 횡단 관심사(크로스커팅관심사)
  // : 프로그래밍에서 비즈니스 로직(핵심기능)과 구분되는 공통 기능을 지칭
  // useMemo: 불필요한 기능은 다시 호출 하지 않도록 설정
  // const 변수 = useMemo(콜백함수, 의존성 배열)
  const analyzeTodo = useMemo( () => {
    console.log("analyzeTodo 함수 호출");

    const totalCount = todo.length;
    const doneCount = todo.filter( (it) => it.isDone).length;
    const notDoneCout = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCout
    }
  }, // 첫번째 인자: 콜백 함수
  [todo] // 두번째 인자: 의존성 배열:값이 변할때만 콜백함수
);

  const { totalCount, doneCount, notDoneCout } = analyzeTodo;


  return (
    <div className="TodoList">
      <h5>Todo List 🎄</h5>
      <hr />
      <div>
        <div>총개수 : {totalCount}</div>
        <div>완료된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCout}</div>
      </div>
      <hr />
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
