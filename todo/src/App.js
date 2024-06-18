
import './App.css';
import { useState, useRef , useReducer} from "react";

import Header from './component/Header.js';
import TodoEditor from './component/TodoEditor.js';
import TodoList from './component/TodoList.js';

import TestReducerComp from './component/TestReducerComp.js';


// 목데이터 설정
const mockTodo = [
  { 
    id:0, 
    isDone: false, 
    content: "React 공부하기", 
    createdDate: new Date().getTime(),
  },
  { 
    id:1, 
    isDone: false, 
    content: "Java 공부하기", 
    createdDate: new Date().getTime(),
  },
];

// State관리 값의 변수를 줄 함수를 외부 함수로 정의
function reducer(state, action){
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...state]
    case "UPDATE":
      return state.map( (it) =>  it.id === action.targetId ? {...it, isDone: !it.isDone}  : it);
    case "DELETE":
      return state.filter( (it) => it.id !== action.targetId)
    default:
      break;
  }

}


function App() {
  
  // 변수(상태)
  const [todo, dispatch] = useReducer(reducer, mockTodo)
  //const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3); //변수 역할

  // 함수(기능)
  const onCreate = (content) => {
    /*
    // 새 할 일 아이템 객체
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime()
    }
    //새롭게 추가된 아이템은 항상 배열의 0번 요소
    setTodo([newItem, ...todo ])
    idRef.current += 1;
    */

    dispatch({
      type:"CREATE",
      newItem: {
        id: idRef.current, // 변수 역할
        content,
        isDone: false,
        createdDate: new Date().getTime()
      }
    }); 
    idRef.current += 1;
    

  }

  const onUpdate = (targetId) => {
    /*
    setTodo(
      todo.map( (it) => it.id === targetId ? {...it, isDone: !it.isDone}  : it)
    );
    */

    dispatch({
      type: "UPDATE",
      targetId
    });
  }

  const onDelete = (targetId) => {
    /*
    setTodo(
      todo.filter( (it) => it.id !== targetId)
    );
    */
   dispatch({
    type:"DELETE",
    targetId,
   });
  }


  return (
    <div className="container">
      <div className="contents">
        {/* <div>
          <TestReducerComp />
        </div> */}

        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </div>  
    </div>  
  );
}

export default App;


/*
기능 구현

App     : 할 일 데이터 관리
Header  : 오늘의 날짜 표시
TodoEditor: 새로운 할 일 아이템 생성
TodoList : 검색에 따라 필터링된 할 일 아이템 렌더링
TodoItem : 할 일 아이템의 수정 및 삭제

Create: 생성
Read : 읽기
Update : 수정
Delete : 삭제



최정화와 메모이제이션(Memoization)
메모이제이션(Memoization):
  특정 입력에 대한 결과를 계산해 메모리 어딘가에 
  저장했다가, 동일한 요청이 들어오면 저장한 결과값을 제공해 빠르게 
  응답하는 기술

useMemo 객체

*/