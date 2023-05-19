import React from "react";
import styles from "./LoginingForm.module.scss";
import Button from "@mui/material/Button";

const LoginingForm = (props: any) => {
  const { setSignInShow } = props;
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={styles["form-container"]}>
      <h2>Sign In</h2>
      <form>
        <input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          autoFocus
          type="text"
          placeholder="Login"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <Button sx={{ margin: "3px 0px" }} variant="contained">
          Login
        </Button>
        <Button
          onClick={() => setSignInShow(false)}
          sx={{
            margin: "3px 0px",
            background: "#dd0a0a",
            "&:hover": { background: "#f24444" },
          }}
          variant="contained"
        >
          Close
        </Button>
      </form>
    </div>
  );
};

export default LoginingForm;
