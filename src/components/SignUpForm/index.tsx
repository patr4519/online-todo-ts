import React from "react";
import styles from "./SignUpFrom.module.scss";
import Button from "@mui/material/Button";
import { SingUpProps } from "../../types/data";
import axios, { AxiosResponse } from "axios";
import { UserType } from "../../types/data";
import { SHA256 } from 'crypto-js';

const SignUpForm = ({ setSignUpShow }: SingUpProps) => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function sha256(str: string) {
    return SHA256(str).toString();
  }

  const submitSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data }: AxiosResponse<UserType[]> = await axios.get(
        "https://63fef788571200b7b7d2e115.mockapi.io/Todos"
      );
      if (!data.some((user) => user.login === login)) {
        await axios.post("https://63fef788571200b7b7d2e115.mockapi.io/Todos", {
          login: login.toLowerCase(),
          password: sha256(password),
          created: Date.now(),
          todos: []
        });
        alert("User created!");
        setSignUpShow(false);
      } else {
        alert("Such user already exist!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => submitSignUp(e)}>
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
        <Button type="submit" sx={{ margin: "3px 0px" }} variant="contained">
          Create
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
