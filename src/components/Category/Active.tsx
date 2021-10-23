import React from "react";
import { useTodo } from "../../contexts/TodoContext";

function Active() {
  const { todo, setTodo, deletedTodo, setDeletedTodo } = useTodo();


  const deleteTodo = (id: string) => {
    const deleteditem = todo.splice(
      todo.findIndex((item) => item.id === id),
      1
    );
    deleteditem[0].status = "false";
    setTodo([...todo]);
    setDeletedTodo([...deletedTodo, deleteditem[0]]);
  };

  return (
    <div className="category">
      <ul className="categoryActiveList">
        {todo.map((item) => (
          <li key={item.id}>
            {item.id} {item.description} {item.status}
            <button
              key={item.id}
              type="button"
              onClick={() => deleteTodo(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Active;
