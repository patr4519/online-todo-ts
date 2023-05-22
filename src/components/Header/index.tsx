import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearCurUser, selectCurUser } from "../../features/todos/curUserSlice";
import Profile from "../Profile";
import styles from "./Header.module.scss";
import { clearItems } from "../../features/todos/todosSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Header = () => {
  const dispatch = useAppDispatch();
  const curUser = useAppSelector(selectCurUser)[0];

  const exit = (): void => {
    localStorage.clear();
    dispatch(clearItems());
    dispatch(clearCurUser());
  };

  return (
    <header className={styles.header}>
      <div>TodoApp</div>
      {curUser ? (
        <div className={styles.curUser}>
          <span>{curUser.login}</span>
          <ExitToAppIcon className={styles.exitButton} onClick={exit} />
        </div>
      ) : (
        <Profile />
      )}
      <div>Settings</div>
    </header>
  );
};

export default Header;
