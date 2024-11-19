import { useState } from "react";
import styles from "../css/form.module.css";

export default ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", completed: false });

  function handleSubmit(e) {
    e.preventDefault();
    const todoExist = todos.some((item) => item.name === todo.name);

    if (!todoExist) {
      // if todo-item already exist, do not add it to the list
      setTodos([...todos, todo]);
      setTodo({ name: "", completed: false });
    }
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputcontainer}>
        <input
          placeholder="Enter the todo item"
          className={styles.todoinput}
          type="text"
          onChange={(e) => setTodo({ name: e.target.value, completed: false })}
          value={todo.name}
        ></input>
        <button className={styles.todoAdd} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};
