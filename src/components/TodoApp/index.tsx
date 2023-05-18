import styles from "./TodoApp.module.scss";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addItem,
  clearItems,
  selectTodos,
} from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";
import LiTodo from "../LiTodo";

const TodoApp = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [visible, setVisible] = React.useState("all");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const items = useAppSelector(selectTodos);

  const add = () => {
    if (inputValue) {
      dispatch(addItem({ inputValue, description }));
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
    setInputValue("");
    setDescription("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div className={styles.todo_app_wrapper}>
      <div className={styles.todo_app}>
        <h1>Todos</h1>
        <div className={styles.input_section}>
          Title:
          <input
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            value={inputValue}
            placeholder="Todo 1"
            type="text"
            ref={inputRef}
          />
          {inputValue.length > 0 && (
            <>
              Description:
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </>
          )}
        </div>
        <button onClick={add}>Add</button>
        <button onClick={() => dispatch(clearItems())}>Clear All</button>
        <ul className={styles.todo_list}>
          {visible === "completed"
            ? items
                .filter((todo) => todo.completed === true)
                .map((todo: ItemTodo) => <LiTodo key={todo.id} {...todo} />)
            : visible === "active"
            ? items
                .filter((todo) => todo.completed === false)
                .map((todo: ItemTodo) => <LiTodo key={todo.id} {...todo} />)
            : items.map((todo: ItemTodo) => <LiTodo key={todo.id} {...todo} />)}
        </ul>
        <div className={styles.footer}>
          <span>
            Total count: <span className={styles.count}>{items.length}</span>
          </span>
          <div className={styles.filter_buttons}>
            <button onClick={() => setVisible("all")}>All</button>
            <button onClick={() => setVisible("active")}>Active</button>
            <button onClick={() => setVisible("completed")}>Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
