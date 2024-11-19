import styles from "../css/todoitems.module.css";

export default ({ id, item, todos, setTodos }) => {
  const removeTodoItem = (key) => {
    console.log("Remove the element " + id);
    // Remove the todo item by filtering out the matching item
    setTodos(todos.filter((todo) => todo.name !== key));
  };

  const changeTodoItemStatus = (e, item) => {
    const isChecked = e.target.checked;
    // Create a new array with the updated todo item status
    const updatedTodos = todos.map((todo) => {
      if (todo.name === item) {
        // Update the completed key only for the matching todo item
        return { ...todo, completed: isChecked };
      }
      return todo;
    });

    let sorted = updatedTodos.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );
    console.log(sorted);
    setTodos(sorted);
  };

  return (
    <div key={id} className={styles.container}>
      <input
        type="checkbox"
        checked={todos.find((todo) => todo.name === item)?.completed || false}
        onChange={(e) => changeTodoItemStatus(e, item)}
        name={item}
      />
      <label className={styles.checkboxDisplay} htmlFor={item}>
        {item}
      </label>
      <button
        onClick={() => removeTodoItem(item)}
        className={styles.buttonDelete}
      >
        Delete
      </button>
    </div>
  );
};
