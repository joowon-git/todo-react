import { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("타이머 실행중!!");
    }, 1000);

    // return 부에 함수로 보내준다..
    return () => {
      clearInterval(interval);
      console.log("타이머 종료!!");
    };
  });
  return (
    <div>
      <span>타이머 시작!!</span>
    </div>
  );
};

export default Timer;
