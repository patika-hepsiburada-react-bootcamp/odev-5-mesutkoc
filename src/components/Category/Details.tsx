import React from 'react'
import { useTodo } from "../../contexts/TodoContext";

function Details() {
  const { allTodo } = useTodo();

    return (
      <div className="category">
        <ul className="categoryDoneList">
          {allTodo.map((item) => (
            <li key={item.id}>
              {item.id} {item.description} {item.status} {item.date}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Details
