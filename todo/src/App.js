
import './App.css';
import Header from './component/Header.js';
import TodoEditor from './component/TodoEditor.js';
import TodoList from './component/TodoList.js';

function App() {
  return (
    <div className="container">
      <div className="contents">

        <Header />
        <TodoEditor />
        <TodoList />
      </div>  
    </div>  
  );
}

export default App;
