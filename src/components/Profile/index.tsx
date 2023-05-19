import React from "react";
import profile_icon from "../../img/profile_Icon.svg";
import styles from "./Profile.module.scss";
import Button from "@mui/material/Button";
import LoginingForm from "../LoginingForm";
import SignUpForm from "../SignUpForm";

const Profile = () => {
  const [showButtons, setShowButtons] = React.useState(false);
  const [signInShow, setSignInShow] = React.useState(false);
  const [signUpShow, setSignUpShow] = React.useState(false);

  return (
    <nav className={styles.profile_block}>
      {signInShow && <LoginingForm setSignInShow={setSignInShow}/>}
      {signUpShow && <SignUpForm setSignUpShow={setSignUpShow}/>}

      {showButtons && (
        <Button onClick={() => setSignInShow(prev => !prev)} sx={{ width: "80px" }} variant="contained" size="small">
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
        <Button onClick={() => setSignUpShow(prev => !prev)} sx={{ width: "80px" }} variant="contained" size="small">
          Sign Up
        </Button>
      )}
    </nav>
  );
};

export default Profile;
