// import React from "react";

function Body() {
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

}

export default Body;