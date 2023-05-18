import styles from "./TodoApp.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem, clearItems, selectTodos } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";
import LiTodo from "../LiTodo";

const TodoApp = () => {
  const [inputValue, setInputValue] = React.useState("");

  const dispatch = useAppDispatch();
  const items = useAppSelector(selectTodos);

  return (
    <div className={styles.todo_app_wrapper}>
      <div className={styles.todo_app}>
        <h1>Todos</h1>
        <div className={styles.input_section}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Todo 1"
            value={inputValue}
          />
          <button
            onClick={() => {
              dispatch(addItem(inputValue));
              setInputValue('')
            }}
          >
            Add
          </button>
          <button onClick={() => dispatch(clearItems())}>Clear All</button>
        </div>
        <ul className={styles.todo_list}>
          {items.map((todo: ItemTodo) => (
            <LiTodo key={todo.id} {...todo}/>
          ))}
        </ul>
        <div className={styles.footer}>
          <span>
            Total count: <span className={styles.count}>{items.length}</span>
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
