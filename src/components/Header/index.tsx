import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>Todo</div>
            <div>Profile</div>
            <div>Settings</div>
        </header>
    )
}

export default Header;