import { useAppSelector } from "../../app/hooks";
import { selectCurUser } from "../../features/todos/curUserSlice";
import formatTimestamp from "../../functions/formatTimestamp";
import styles from "./ProfileComponent.module.scss";
import React from "react";

const ProfileComponent = () => {
  const [id, setId] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [created, setCreated] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
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
