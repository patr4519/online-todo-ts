import styles from "./LiTodo.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { changeComplete, removeItem } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";

const LiTodo = (props: ItemTodo) => {
  const dispath = useAppDispatch();

  return (
    <li>
      <div className={styles.leftBlock}>
        <Checkbox
          onClick={() => dispath(changeComplete(props.id))}
          checked={props.completed}
          sx={{ color: "#a88a31", "&.Mui-checked": { color: "#a88a31" } }}
        />
        <label>{props.text}</label>
      </div>
      <div className={styles.rightBlock}>
        {props.description && (
          <Button
            onClick={() => alert(props.description)}
            size="small"
            variant="contained"
            sx={{ background: "#27847b" }}
          >
            Desc
          </Button>
        )}
        <IconButton
          sx={{ width: "35px" }}
          onClick={() => dispath(removeItem(props.id))}
        >
          <DeleteIcon className={styles.deleteIcon} sx={{ color: "#e32315" }} />
        </IconButton>
      </div>
    </li>
  );
};

export default LiTodo;
