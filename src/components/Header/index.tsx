import Profile from "../Profile";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>TodoApp</div>
      <Profile />
      <div>Settings</div>
    </header>
  );
};

export default Header;
