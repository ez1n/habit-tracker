import '../app.css';
import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = props => {
  const [count, setCount] = useState(0);  // state
  const spanRef = useRef();  // 한번 만들고 저장해 두었다가 재사용

  // 함수에서의 useRef
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // 컴포넌트가 mount 되거나 update 될 떄마다 호출
  // [두 번째 인자]가 변경될 때마다 호출되도록 설정 가능
  useEffect(() => {
    console.log(`mounted & updated!: ${count}`)
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

// function component는 prop이나 state 변경시 함수 전체 반복
// 지역변수도 무한정 반복됨
// 계속해서 새로운것을 만들고 값을 계산하고 비즈니스 로직들이 모두 다시 수행됨
// use State: react hook에서 제공하는 api => 계속 호출해도 컴포넌트에 연결된 state는 따로 저장되어 있어 동일한 값을 받아옴 (초기화되지않음)
