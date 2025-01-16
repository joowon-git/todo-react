import { useRef } from "react";
const TodoInput = ({ addTodo }) => {
  // const isProcessing = useRef(false); // 이벤트 처리 중인지 확인하는 플래그

  const keyDownHandler = (e) => {
    // if (isProcessing.current) return; // 이미 처리 중이면 무시

    console.log(`TodoInput Component: ${e.key}`);

    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value === "") return;
      // isProcessing.current = true; // 처리 시작
      // 실제 리스트에 저장
      addTodo(e.target.value);
      e.target.value = "";
      e.target.focus();

      // 짧은 시간 후에 다시 이벤트 처리 가능하도록 설정
      // setTimeout(() => {
      //   isProcessing.current = false;
      //   e.target.value = "";
      //   e.target.focus();
      // }, 100);
    }
  };

  return (
    <input
      type="text"
      placeholder="할 일을 입력하세요."
      // onKeyDown={keyDownHandler}
      onKeyUp={keyDownHandler}
    />
  );
};

export default TodoInput;
