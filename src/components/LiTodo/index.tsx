import styles from "./LiTodo.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { changeComplete, removeItem } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const LiTodo = (props: ItemTodo) => {
  const dispath = useAppDispatch();

  return (
    <li>
      <div className={styles.leftBlock}>
        <input
          onClick={() => dispath(changeComplete(props.id))}
          defaultChecked={props.completed}
          type="checkbox"
        />
        <label>{props.text}</label>
      </div>
      <div className={styles.rightBlock}>
        {props.description && (
          <Button
            onClick={() => alert(props.description)}
            size="small"
            variant="contained"
            color="success"
          >
            Desc
          </Button>
        )}
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => dispath(removeItem(props.id))}
          sx={{ color: "#e32315" }}
        />
      </div>
    </li>
  );
};

export default LiTodo;
