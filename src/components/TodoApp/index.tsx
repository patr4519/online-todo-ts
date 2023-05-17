import styles from "./TodoApp.module.scss";

const TodoApp = () => {
  return (
    <div className={styles.todo_app_wrapper}>
      <div className={styles.todos}>todos</div>
    </div>
  );
};

export default TodoApp;
