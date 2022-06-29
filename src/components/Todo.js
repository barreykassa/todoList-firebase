import React, { useState } from "react";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import {AiFillCheckCircle,AiFillEdit,AiFillDelete} from "react-icons/ai"

export default function Todo({
  todo,
  toggleComplete,
  handleDelete,
  handleEdit,
}) {
  const [newTitle, setNewTitle] = useState(todo.title);
  const handleChange = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewTitle(todo.title);
    } else {
      setNewTitle(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
        className="list"
      />
      <div>
        <button
          className="button-complete"
          onClick={() => {
            toggleComplete(todo);
          }}
        >
          {/* <CheckCircleIcon id="i" /> */}
          <AiFillCheckCircle id="i"/>
        </button>
        <button
          className="button-edit"
          onClick={() => handleEdit(todo, newTitle)}
        >
          {/* <EditIcon id="i" /> */}
          <AiFillEdit  id="i"/>
        </button>
        <button className="button-delete" onClick={() => handleDelete(todo.id)}>
          {/* <DeleteIcon id="i" /> */}
          <AiFillDelete id="i"/>
        </button>
      </div>
    </div>
  );
}
