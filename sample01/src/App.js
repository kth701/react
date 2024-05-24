import './App.css';
import Header from './component/Header.js'
import Body from './component/Body.js' 
import Footer from './component/Footer.js'  

function App() {

  // const name = "홍길동";
  const BodyProp = {
    name: "홍길순",
    location: "부산"
    //favorList: ["파스타","빵","떡뽂이"]
  }

  return (
    <div className="App"> 
      <Header />
      {/* <Body name={name} location={"부산"}  /> */}
      <Body {...BodyProp} />
      <Footer />
    </div>
  );
}

export default App;
