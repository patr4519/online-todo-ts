import styles from "./ProfileComponent.module.scss";

import React from "react";

const ProfileComponent = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit}>
      <div className={styles.contactInfo}>
        <div className={styles.filed}>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" />
        </div>
        <div className={styles.filed}>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" />
        </div>
        <div className={styles.filed}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={styles.filed}>
          <label htmlFor="created">Created:</label>
          <input type="text" id="created" name="created" />
        </div>
      </div>
    </form>
  );
};

export default ProfileComponent;
