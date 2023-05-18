import { useAppDispatch } from "../../app/hooks";
import { changeComplete, removeItem } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";

const LiTodo = (props: ItemTodo) => {
  const dispath = useAppDispatch();

  return (
    <li>
      <input
        onClick={() => dispath(changeComplete(props.id))}
        checked={props.completed}
        type="checkbox"
      />
      <label>{props.text}</label>
      <button onClick={() => dispath(removeItem(props.id))}>Remove</button>
    </li>
  );
};

export default LiTodo;
