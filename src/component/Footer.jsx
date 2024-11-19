import styles from "../css/footer.module.css";

export default ({ todos }) => {
  const totalItems = todos.length;
  const completedItem = todos.filter((todo) => todo.completed).length;
  return (
    <>
      <div className={styles.footer}>
        <h3 className={styles.item}>Total todo items: {totalItems}</h3>
        <h3 className={styles.item}>Total completed items:{completedItem}</h3>
      </div>
    </>
  );
};
