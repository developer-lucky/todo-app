import TodoItems from "./TodoItems";
import styles from "../css/todolist.module.css";

export default ({ todos, setTodos = { setTodos } }) => {
  return (
    <div className={styles.todolist}>
      {todos.map((t, index) => (
        <TodoItems
          key={index}
          item={t.name}
          todos={todos}
          setTodos={setTodos}
        ></TodoItems>
      ))}
    </div>
  );
};
