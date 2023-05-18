import { useAppDispatch } from "../../app/hooks";
import { changeComplete, removeItem } from "../../features/todos/todosSlice";
import { ItemTodo } from "../../types/data";

interface LiTodoProps {
  item: ItemTodo;
}

const LiTodo = (props: ItemTodo) => {
  const dispath = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        onClick={() => dispath(changeComplete(props.id))}
        readOnly
      />
      <label>{props.text}</label>
      <button onClick={() => dispath(removeItem(props.id))}>Remove</button>
    </li>
  );
};

export default LiTodo;
