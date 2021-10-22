import { FC } from "react";
import { useTodo } from "../../contexts/TodoContext";
import { IProps } from "./types";
import Newtodo from "../Todo";
import Category from "../Category";

const Main: FC<IProps> = (props) => {
  const { todo, setTodo, deletedTodo, setDeletedTodo } = useTodo();

  const deleteTodo = (id: string) => {
    const deleteditem = todo.splice(
      todo.findIndex((item) => item.id === id),
      1
    );
    setTodo([...todo]);
    setDeletedTodo([...deletedTodo, deleteditem[0]]);
  };

  return (
    <div>
      <Newtodo></Newtodo>
      <Category></Category>
      <ul>
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
      <hr />
      {props.name}
      <hr />
      <ul>
        {deletedTodo.map((item) => (
          <li key={item.id}>
            {item.id} {item.description} {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
