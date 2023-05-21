import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearCurUser, selectCurUser } from "../../features/todos/curUserSlice";
import Profile from "../Profile";
import styles from "./Header.module.scss";
import { Button } from "@mui/material";
import { clearItems } from "../../features/todos/todosSlice";


const Header = () => {
  const dispatch = useAppDispatch();
  const curUser = useAppSelector(selectCurUser)[0];

  const exit = (): void => {
    localStorage.clear();
    dispatch(clearItems());
    dispatch(clearCurUser());
  }

  return (
    <header className={styles.header}>
      <div>TodoApp</div>
      {curUser ? <Button onClick={exit}>Exit</Button> : <Profile />}
      <div>Settings</div>
    </header>
  );
};

export default Header;
