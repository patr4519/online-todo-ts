import React from "react";
import styles from "./LoginingForm.module.scss";
import Button from "@mui/material/Button";
import { LoginingFormProps, UserType } from "../../types/data";
import axios, { AxiosResponse } from "axios";
import { useAppDispatch } from "../../app/hooks";
import { addCurUser } from "../../features/todos/curUserSlice";
import { clearItems, setFromLocalS } from "../../features/todos/todosSlice";

const LoginingForm = ({ setSignInShow }: LoginingFormProps) => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data }: AxiosResponse<UserType[] | []> = await axios.get(
        "https://63fef788571200b7b7d2e115.mockapi.io/Todos"
      );
      let user: null | UserType = null;

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].login === login.toLocaleLowerCase() &&
          data[i].password === password
        ) {
          user = data[i];
          if (user) {
            dispatch(clearItems());

            dispatch(setFromLocalS(user.todos));
            dispatch(addCurUser(user));
          }
          setSignInShow(false);
          break;
        }
      }
      if (!user) {
        alert("Not such user or wrong password!");
        setLogin("");
        setPassword("");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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
