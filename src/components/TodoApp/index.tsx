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
import { Button } from "@mui/material";

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

  const clearAll = () => {
    dispatch(clearItems());
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
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </>
          )}
        </div>
        <Button onClick={add} size="small" variant="contained" color="success">
          Add
        </Button>
        <Button
          onClick={clearAll}
          size="small"
          variant="contained"
          color="error"
        >
          Clear All
        </Button>
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
            <button
              className={visible === "all" ? `${styles.active}` : ""}
              onClick={() => setVisible("all")}
            >
              All
            </button>
            <button
              className={visible === "active" ? `${styles.active}` : ""}
              onClick={() => setVisible("active")}
            >
              Active
            </button>
            <button
              className={visible === "completed" ? `${styles.active}` : ""}
              onClick={() => setVisible("completed")}
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
