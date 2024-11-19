import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Todo from "./component/Todo";
import Header from "./component/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
