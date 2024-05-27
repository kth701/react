import {useState} from "react";

function BodyState2()  {

  // useState 객체 변수선언
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio]= useState("");

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: ""
  })

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

  const hanleOnChange = (e) =>{
    
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }
  return (
    <div>
      <div>
        <input  
                value="name"
                value={state.name}

                onChange={hanleOnChange} 
                placeholder="이름" />
      </div>
      <div>
        <select value={state.gender} onChange={hanleOnChange}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" 
              value={state.birth} 
              onChange={hanleOnChange} />
      </div>
      <div>
        <textarea 
              value={state.bio} 
              onChange={hanleOnChange}></textarea>
      </div>

    </div>
  )
}

export default BodyState2;