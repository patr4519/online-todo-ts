import { useAppDispatch } from "../../app/hooks";
import { changeComplete, removeItem } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";
import styles from "./LiTodo.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const LiTodo = (props: ItemTodo) => {
  const dispath = useAppDispatch();

  return (
    <li>
      <input
        onClick={() => dispath(changeComplete(props.id))}
        defaultChecked={props.completed}
        type="checkbox"
      />
      <label>{props.text}</label>
      <button onClick={() => alert(props.description)}>Description</button>
      <DeleteIcon
        className={styles.deleteIcon}
        onClick={() => dispath(removeItem(props.id))}
        sx={{ color: "#e32315" }}
      />
    </li>
  );
};

export default LiTodo;
