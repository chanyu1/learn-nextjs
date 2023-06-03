'use client';

import { useState } from 'react';

// 클라이언트 컴포넌트로 만들어도 서버에서 UI를 만들고 리턴해 줌
// 그 후 하이드레이션에 의해 기능이 실행되도록 만들어짐
export default function Counter() {
  console.log('client component');

  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>increment num</button>
    </>
  );
}
