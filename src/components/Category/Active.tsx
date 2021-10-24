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
      <ul className="list">
        {todo
          .slice(0)
          .reverse()
          .map((item) => (
            <li key={item.id}>
              <button
                className="deleteButton"
                key={item.id}
                type="button"
                onClick={() => deleteTodo(item.id)}
              >
                ✓
              </button>
              <p>
                {item.description} <span className="itemdate">{item.date}</span>
              </p>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Active;
