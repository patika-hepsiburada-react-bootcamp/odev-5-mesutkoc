import React from "react";
import { useTodo } from "../../contexts/TodoContext";

function Done() {
  const { deletedTodo } = useTodo();

  return (
    <div className="category">
      <ul className="list">
        {deletedTodo
          .slice(0)
          .reverse()
          .map((item) => (
            <li key={item.id}>
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

export default Done;
