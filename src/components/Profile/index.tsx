import React from "react";
import profile_icon from "../../img/profile_Icon.svg";
import styles from "./Profile.module.scss";
import Button from "@mui/material/Button";

const Profile = () => {
  const [showButtons, setShowButtons] = React.useState(false);

  return (
    <nav className={styles.profile_block}>
      {showButtons && (
        <Button sx={{width: '80px'}} variant="contained" size="small">
          Sign In
        </Button>
      )}
      <img
        onClick={() => setShowButtons((prev) => !prev)}
        className={styles.profileIMG}
        height={25}
        src={profile_icon}
        alt="profile"
      />
      {showButtons && (
        <Button sx={{width: '80px'}} variant="contained" size="small">
          Sign Up
        </Button>
      )}
    </nav>
  );
};

export default Profile;
