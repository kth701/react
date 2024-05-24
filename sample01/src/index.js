import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  컴포넌트 호출=> "< 컴포너트이름 />""
    <App />
    
);


/*
리액트 컴포넌트 => 자바스크립트 함수 만들어 HTML값을 반환
JSX(자바스크립트XML): 자바스크립트+HTML태그 썩어 사용하는 문법
*/
