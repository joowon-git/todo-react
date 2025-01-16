import { useState, useEffect } from "react";

const Todo = ({ todo, deleteHandler, updateHandler }) => {
  // 수정폼, 수정
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState(todo.title);

  // 마운팅될 때 , 언마운팅될 때
  useEffect(() => {
    console.log("Todo 컴포넌트가 화면에 나타남! " + todo.title);

    return () => {
      console.log("Todo 컴포넌트가 화면에서 사라짐.." + todo.title);
    };
  }, [todo]);

  const updateModeHandler = () => {
    // setUpdateMode(!updateMode);
    setUpdateMode(true);
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const updater = () => {
    setUpdateMode(false);
    updateHandler({ ...todo, title });
  };

  if (updateMode) {
    return (
      <>
        <input type="text" value={title} onChange={changeHandler} />
        <button onClick={updater}>수정</button>
      </>
    );
  } else {
    return (
      <>
        {todo.title}
        <button onClick={() => deleteHandler(todo.id)}> 삭제</button>
        <button onClick={updateModeHandler}> 수정 </button>
      </>
    );
  }
};

export default Todo;
