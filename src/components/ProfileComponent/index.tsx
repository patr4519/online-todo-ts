import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCurUser } from "../../features/todos/curUserSlice";
import formatTimestamp from "../../functions/formatTimestamp";
import styles from "./ProfileComponent.module.scss";
import React from "react";
import { Button } from "@mui/material";

const ProfileComponent = () => {
  const [id, setId] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [created, setCreated] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const curUser = useAppSelector(selectCurUser)[0];

  React.useEffect(() => {
    if (curUser) {
      setId(curUser.id);
      setLogin(curUser.login);
      setPassword(curUser.password);
      setCreated(formatTimestamp(curUser.created));
    }
  }, []);

  if (!curUser) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.emptyProfileBlock}>
          <h2>Sign In</h2>
          <div>To save your todos in your account</div>
          <Link to="/">
            <Button variant="contained">back</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.profile} onSubmit={handleSubmit}>
      <div className={styles.contactInfo}>
        <div className={styles.filed}>
          <label htmlFor="id">ID:</label>
          <input readOnly defaultValue={id} type="text" id="id" name="id" />
        </div>
        <div className={styles.filed}>
          <label htmlFor="login">Login:</label>
          <input
            readOnly
            defaultValue={login}
            type="text"
            id="login"
            name="login"
          />
        </div>
        <div className={styles.filed}>
          <label htmlFor="password">Password:</label>
          <input
            defaultValue={password}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className={styles.filed}>
          <label htmlFor="created">Created:</label>
          <input
            readOnly
            defaultValue={created}
            type="text"
            id="created"
            name="created"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
