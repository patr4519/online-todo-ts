import React from 'react'
import styles from './SignUpFrom.module.scss'
import Button from "@mui/material/Button";
import { SingUpProps } from '../../types/data';

const SignUpForm = ({ setSignUpShow }: SingUpProps) => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={styles["form-container"]}>
      <h2>Sign Up</h2>
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
          onClick={() => setSignUpShow(false)}
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

export default SignUpForm;