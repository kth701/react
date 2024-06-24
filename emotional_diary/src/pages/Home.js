// import { useSearchParams } from "react-router-dom";
import Button from "../component/Button"
// 페이지 상단
import Header from "../component/Header"
// 페이지 본체
import Editor from "../component/Editor";

// 쿼리스트링을 이용할 경우: useSearchParams()
// http://localhost:3000/?name=hong&age=30&addr=부산
const Home = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("searchParams.get():", searchParams.get("name"))
  // console.log("searchParams.get():", searchParams.get("age"))
  // console.log("searchParams.get():", searchParams.get("addr"))

  return (
      <div>
        
        <Header 
            title={"Home"}
            leftChild={
                <Button 
                text={"긍정버튼"}
                onClick={ () => { alert("긍정버튼"); } } />
            }
            rightChild={
                <Button 
                text={"danger"}
                type={"danger"}
                onClick={ () => { alert("danger!!!!"); } } />
            }
            

            // <Button 
            //     text={"warning"}
            //     type={"warning"}
            //     onClick={ () => { alert("warning!!!!"); } } />
            // <Button 
            //     text={"danger"}
            //     type={"danger"}
            //     onClick={ () => { alert("danger!!!!"); } } />
            // <Button 
            //     text={"primary"}
            //     type={"primary"}
            //     onClick={ () => { alert("primary!!!!"); } } />   
        />                     

       <Editor onSubmit={ alert("작성완료 버튼 클릭")} />
      </div>
    );
}
export default Home;