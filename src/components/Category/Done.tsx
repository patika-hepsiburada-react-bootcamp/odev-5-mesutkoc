import React from "react";
import { useTodo } from "../../contexts/TodoContext";

function Done() {
  const {  deletedTodo } = useTodo();

  return (
    <div className="category">
      <ul className="categoryDoneList">
        {deletedTodo.map((item) => (
          <li key={item.id}>
            {item.id} {item.description} {item.status} {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Done;
