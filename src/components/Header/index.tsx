import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearCurUser, selectCurUser } from "../../features/todos/curUserSlice";
import Profile from "../Profile";
import styles from "./Header.module.scss";
import { clearItems } from "../../features/todos/todosSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <div>TodoApp</div>
      </Link>
      {curUser ? (
        <div className={styles.curUser}>
          <span>{curUser.login}</span>
          <ExitToAppIcon className={styles.exitButton} onClick={exit} />
        </div>
      ) : (
        <Profile />
      )}
      <Link to="/profile">
        <div>Profile</div>
      </Link>
    </header>
  );
};

export default Header;
