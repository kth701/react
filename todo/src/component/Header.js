import React from 'react';
import './Header.css'


const Header = () => {
  console.log("Header 업데이트")
  console.log("리렌더될 때마다 실행되는 컴포넌트입니다.");

  return (
    <div className="Header alert alert-warning ">
      <h5>오늘은 🏚</h5>
      <h4>{new Date().toDateString()}</h4>
    </div>
  )
}

// export default Header;
export default React.memo(Header)

/*
React.memo는 인수로 전달한 컴포넌트를 메모이제이션 컴포넌트로 만들어 반환
React.memo가 반환하는 컴포넌트
  : 부모 컴포넌트에서 전달된 Props가 변경되지 않는 한 리렌더되지 않음.
  : 크고 복잡할수록 불필요한 렌더링을 방지, 브라우저의 연산량을 줄여 성능 최적화


*/