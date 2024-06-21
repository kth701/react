import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
/*
페이지 라우팅: 요청에 따라 적절한 페이지를 반환하는 일련의 과정
서버 사이트(Server Side)렌더링
클라이언트(Client Side) 렌더링 - 페이지 라우팅 전용라이브러리를 이용
*/
// BrowserRouter를 App의 부모 컴포넌트로 설정:  브라우저의 주소변경을 감지하는 기능 수행

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

// 페이지 컴포넌트 만들기
/*
Home: 인덱스 페이지
New: 새 일기 작성 페이지
Diary: 일기 상세조회 페이지
Edit: 작성한 일기를 수정, 삭제하는 페이지
*/