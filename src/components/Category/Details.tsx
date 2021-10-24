import React from 'react'
import { useTodo } from "../../contexts/TodoContext";

function Details() {
  const { allTodo } = useTodo();

    return (
      <div className="category">
        <ul className="list">
          {allTodo
            .slice(0)
            .reverse()
            .map((item) => (
              <li key={item.id}>
                <p>
                  {item.description} <span>{item.date}</span>
                </p>
                <hr />
              </li>
            ))}
        </ul>
      </div>
    );
}

export default Details
