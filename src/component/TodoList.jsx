import Todo from "./Todo";

const TodoList = ({ todoList, deleteHandler, updateHandler }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        </li>
      ))}

      {/* <li>리액트 공부하기</li>
      <li>스프링 공부하기</li>
      <li>커피마시기</li> */}
    </ul>
  );
};

export default TodoList;
