import styles from "./TodoApp.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem } from "../../features/todos/todosSlice";

const TodoApp = () => {
  const [inputValue, setInputValue] = React.useState("");

  const dispatch = useAppDispatch();

  return (
    <div className={styles.todo_app_wrapper}>
      <div className={styles.todo_app}>
        <h1>Todos</h1>
        <div className={styles.input_section}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Todo 1"
          />
          <button onClick={() => dispatch(addItem(1))}>Add</button>
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
