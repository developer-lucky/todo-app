import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <Footer todos={todos}></Footer>
    </>
  );
};
