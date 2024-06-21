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
};

export default Button;