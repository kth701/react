// import React from "react";
// 스타일 시트 가져오기
import "./Body.css"

/* 동작:  props = {name:"홍길동", location:"부산"} */
// function Body(props) { 
function Body(  { name, location, favorList }  ) { 
  // console.log(props)
  /* 구조 분해 할당: {변수1, 변수2}= {객체:속성1, 객체:속성2} */
  // const { name, location } = props;

  return (
    <div className="body">
      {/* <h1 style={{backgroundColor:"red",color:"blue"}}>body</h1> */}
      {/* <h1 className="content">이름: { props.name }, 거주지: {props.location}</h1> */}
      <h1 className="content">이름: {name}, 거주지: {location}</h1>
      <br />
      
      {/* <div>
      {
        favorList.map( (data)=> {
          return <span>{data}</span>
        })
      }
      </div> */}
      <br />
      {favorList.length} 개의 음식을 좋아합니다.

    </div>
  );


  /*
  const number = 1;
  const a = 10;
  const b = 20;
  const name="홍길동";
  const age=10;

  const boolA = true;
  const boolB = false;

  const objA = {
    name: "길순이",
    age: 12,
    address: "부산"
  }

  const num10 = 19
  const num20 = 201;

  // 조건상황에 따라 각가 다른 내용을 return 처리 
  /*
  if ( num20 % 2 === 0){
    return "<div>짝수</div>"
  } else {
    return (
      <>
        <h1>body</h1>
        <h2>number={number}</h2>
        <hr />
        <h3>a={a},b={b}, a+b={a+b}</h3>
        <hr />
        <div>
          <div>이름: {name}, 나이:{age}</div>
          <hr/>
          boolean
          <h3>{ String(boolA && boolB) }</h3>
          <h3>{ String(5>2)} , { String(5<2)}</h3>
          <h3> {objA.name},{objA.age},{objA.address} </h3>
        </div>
        <hr />
        <div>
          <h3>
            {num10}은(는) {num10 % 2 === 0 ?"짝수":"홀수"}
          </h3>
        </div>
      </>
    );
  } // end if
  */

}



// Props 기본값 설정
Body.defaultProps= {
  favorList: [],
}
export default Body;