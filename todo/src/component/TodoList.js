import './TodoList.css'
import TodoItem from './TodoItem.js'
import { useContext, useState , useMemo} from "react";

import { TodoContext } from "../App";

// const TodoList = ( {todo, onUpdate, onDelete}) => { // Props로 통해 값을 전달 받음

const TodoList = () => {
  // ------------------------------------------------------------- //
  const {todo}= useContext(TodoContext);
  // ------------------------------------------------------------- //

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value)

    //console.log("search: ",search)
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
      {/*
       할일아이템추가->App컴포넌트 todo업데이트 -> App컴포넌트 리렌더 
        ->TodoItem에 전달되는 Pros도 변경되어 리렌더 

        불필요한 함수 재생성 방지 : useCallback
        const memoizedFunc = useCallback(콜백함수, 의존성배열)
        의존성 배열에 값이 변경되면 콜백함수 수행
        의존성 배열을 빈배열로 전달 -> 콜백함수를 수행하지 않음

        const onCreate = useCallback( 
          // setState[newItem, ...state]=> 함수형 기능으로 표현
          setState ( (state) => [newItem, ...state] )
        , [])

        */
      }
      <div className="list_wrapper">
          {/* {todo.map( (it) =>  <div>{it.content}</div>)} */}
          
          {/* todo 할일 아이템 전체 list */}
          {/* {todo.map( (it) => <TodoItem key={it.id} {...it} />)} */}
          {getSearchResult().map( (it) => ( 
                      <TodoItem 
                          key={it.id} 
                          {...it} 
                          // Props로 통해 값을 전달하는 방식 생략
                          // onUpdate={onUpdate}
                          // onDelete={onDelete}
                          />
                      ))}

      </div>
    </div>
  );
}

TodoList.defaultProps = {
  todo: [],
}

export default TodoList;
