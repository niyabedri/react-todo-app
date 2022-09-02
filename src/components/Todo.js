import React, { useState } from "react";
import { RiCloseCircleLine, RiEditLine } from "react-icons/ri";
import TodoForm from "./TodoForm";
// import {FiEdit} from" react-icons/fi/FiEdit";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: null });
  };

  if (edit.id) {
    console.log("Edit",edit.value);
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const lists = todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="delete-icon"
        >
          {todo.text}--{edit.id}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <RiEditLine
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
  return lists;
}

export default Todo;
