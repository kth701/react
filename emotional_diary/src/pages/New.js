import Button from "../component/Button"
import Header from "../component/Header"

const  New = () => {
  return <div>
    <Header 
            title={"New"}
            leftChild={
                <Button 
                text={"뒤로가기"}
                onClick={ () => { alert("뒤로가기"); } } />
            }
            rightChild={
                <Button 
                text={"삭제하기"}
                type={"danger"}
                onClick={ () => { alert("삭제하기!!!!"); } } />
            }
              
        />                     

  </div>
}

 export default New;
 