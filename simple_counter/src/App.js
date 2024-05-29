
import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'


function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Simple Counter</h1>
      </div>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>
  );
}

export default App;
