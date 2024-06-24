import "./Button.css";
// 공통 컴포넌트

const Button = ({text, type, onClick})  => {

  // 삼항연산자 => (조건식) ? true : false
  const btnType = ["primary","secondary","success","danger","warning","info","light","dark","link"].includes(type) 
                    ? type 
                    : "success";

  //className="btn btn-primary btn-sm"
  return <button className={  ["btn",`btn-${btnType}`, "btn-sm","btn_style"].join(" ")  }
                 onClick = { onClick }
          >{text}</button>

  // "btn-"+변수 => `btn-${변수}`
  //return <button classNaME="btn btn-success" onClick={수행할 함수본체 or 수행할 함수명}>버튼</button>
};

export default Button;