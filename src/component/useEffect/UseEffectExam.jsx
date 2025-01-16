import { useEffect, useState } from "react";

const UseEffectExam = () => {
  console.log("UseEffectExam Component Rendering--");

  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);
  // useEffect -- 컴포넌트가 마운트, 업데이트, 마운트 해제될 때 뿌려짐
  // useEffect(() => {}) -- 렌더링될 때마다 매번 실행
  // useEffect(() => {}, []) -- 디펜더시 array가 변경될 때마다 매번 실행

  // 컴포넌트 렌더링될 때마다 실행
  useEffect(() => {
    console.log("useEffect() 실행!!");
  });

  // array 안의 값이 변경될 때마다 실행
  useEffect(() => {
    console.log("useEffect() [count] 실행!!");
  }, [count]);

  // 비어있는 디펜던시 array이는 최초 한 번만 실행됨
  useEffect(() => {
    console.log("useEffect() [] 실행!!");
  }, [count]);

  return (
    <div>
      <span>
        count :: {count}{" "}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          update
        </button>
        <span>name :: {name}</span>
      </span>
    </div>
  );
};

export default UseEffectExam;
