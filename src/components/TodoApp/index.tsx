import styles from "./TodoApp.module.scss";

const TodoApp = () => {
  return (
    <div className={styles.todo_app_wrapper}>
        <div className={styles.todo_app}>
          <h1>Title</h1>
          <div className={styles.input_section}>
            <input type="text" placeholder="Search" />
            <button>Add</button>
            <button>Clear All</button>
          </div>
          <ul className={styles.todo_list}>Rendered todos</ul>
          <div className={styles.footer}>
            <span>
              Total count: <span className={styles.count}>0</span>
            </span>
            <div className={styles.filter_buttons}>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TodoApp;
