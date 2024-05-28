import {useState} from "react";

function BodyState2()  {

  // useState 객체 변수선언
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio]= useState("");

  // a = 10
  // a1 = [10,20,30,40] => a1[0]
  // a2 = {name:"길순이", age:30} => a2.name =>a2['name']

  const [state, setState] = useState({
    name: "홍길동",
    gender: "",
    birth: "",
    bio: ""
  })

  //console.log("-------")
  //console.log(state.name,"=>",state['name'])

  // 이벤트 핸들러 선언
  // const onChangeName = (e) => { setName(e.target.value)  }
  // const onChangeGender = (e) => {
  //   setGender(e.target.value)
  //   console.log(gender)
  // }
  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value)
  //   console.log(e.target.value)
  // }
  // const onChangeBio = (e) => {
  //   setBio(e.target.value)
  //   console.log(e.target.value)
  // }

  
  // myFun(10,20,30)
  
  // function myFun(...num){
  //   console.log(num)
  //   console.log(num[0])
  //   console.log(num[1])
  // }


  const hanleOnChange = (e) =>{
    // 상태 객체에 값을 수정하는 메서드
    setState({
      ...state,
      [e.target.name]: e.target.value // ['name']: e.target.value
    })
    // 상태변수값이 변경된 후 출력
    //console.log(state)

  }
  return (
    <div>
      <div>
        <input  
                name="name"
                value={state.name}

                onChange={hanleOnChange} 
                placeholder="이름" />
        <div>이벤트가 발생객체와 변수 연결상태: {state.name}</div>
      </div>
      <div>
        <select name="gender" 
                value={state.gender} 
                onChange={hanleOnChange}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" 
              name="birth"
              value={state.birth} 
              onChange={hanleOnChange} />
      </div>
      <div>
        <textarea 
              name="bio"
              value={state.bio} 
              onChange={hanleOnChange}></textarea>
      </div>

    </div>
  )
}

export default BodyState2;