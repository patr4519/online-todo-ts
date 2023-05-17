import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>TodoApp</div>
      <div>Profile</div>
      <div>Settings</div>
    </header>
  );
};

export default Header;
