import { useState, useRef, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";

const TodoBox = () => {
  const [todoList, setTodoList] = useState([
    // 컴포넌트가 렌더링될 때 최초 한번 초기화하는 방법: useEffect
    // { id: 1, title: "리액트 공부하기" },
    // { id: 2, title: "스프링 공부하기" },
    // { id: 3, title: "커피마시기" },
    // { id: 4, title: "점심 맛있게 먹기" },
  ]);

  useEffect(() => {
    // 백엔드 서버에서 todoList를 가져오는 함수를 구현..
    // 동기 vs 비동기  -> 서버와 통신할 때는? 주원: 비동기

    async function getTodos() {
      const result = await axios.get("http://localhost:1577/api/todos");
      setTodoList(result.data);
    }

    getTodos();
  }, []); // [] 빈 배열은, 최초 한번 초기화를 의미

  // const id = useRef(Math.max(...todoList.map((todo) => todo.id)) + 1);

  // 추가
  const addTodoList = (title) => {
    console.log(`box:::: ${title}`);
    const newTodo = {
      // id: id.current++,
      title: title,
    };

    // async
    async function addTodo(newTodo) {
      // 배열에 추가
      await axios.post("http://localhost:1577/api/todos", newTodo);

      // 추가 후 배열을 다시 응답받기
      const result = await axios.get("http://localhost:1577/api/todos");
      setTodoList(result.data);
    }

    addTodo(newTodo);

    // 기존에는 useState 에 추가했었다면...
    // setTodoList([...todoList, newTodo]);
    // console.log(todoList);
    // 이제 서버에 저장하고 싶어요~!!
    // axios.post("http://localhost:1577/api/todos");
  };

  // 삭제
  const deleteTodoList = (id) => {
    // console.log(id);
    // setTodoList(todoList.filter((todo) => todo.id !== id));

    async function deleteTodo(id) {
      // 배열에서 삭제
      await axios.delete(`http://localhost:1577/api/todos/${id}`);

      // 배열에서 삭제 후 다시 응답받기
      const result = await axios.get("http://localhost:1577/api/todos");
      setTodoList(result.data);
    }

    deleteTodo(id);
  };

  // 수정
  const updateTodoList = (todo) => {
    // 리렌더링이 필요 없다면 setTodoList 하지 않아도 된다..!
    // todoList.map((item) => {
    //   if (item.id === todo.id) {
    //     item.title = todo.title;
    //   }
    // });

    //api 서버를 이용해서  수정하기.
    async function updateTodo(todo) {
      await axios.patch("http://localhost:1577/api/todos", todo);

      const result = await axios.get("http://localhost:1577/api/todos"); //서버에서  todoList를 얻어옴.
      setTodoList(result.data);
    }

    updateTodo(todo);

    // 수정 후 리렌더링이 일어나야 한다면.
    // const updateTodoList = todoList.map((item) =>
    //   item.id === todo.id ? { ...item, title: todo.title } : item
    // );
    // setTodoList(updateTodoList);
  };

  return (
    <>
      <TodoInput addTodo={addTodoList} />
      <TodoList
        todoList={todoList}
        deleteHandler={deleteTodoList}
        updateHandler={updateTodoList}
      />
    </>
  );
};

export default TodoBox;
