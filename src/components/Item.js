import { useDispatch } from "react-redux";
import { deleteItem, toggleItem } from "../features/todoSlice";

export default function Item({ item }) {
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleItem(item.id));
  }

  function handleDelete() {
    dispatch(deleteItem(item.id));
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleToggle} />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
