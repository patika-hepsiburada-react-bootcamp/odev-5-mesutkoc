import { FC } from "react";
import { useTodo } from "../../contexts/TodoContext";
import { IProps } from "./types";
import Newtodo from "../Todo";
import Category from "../Category";



const Main: FC<IProps> = (props) => {
  const { todo } = useTodo();
  
  return (
    <div>
      <Newtodo></Newtodo>
      <Category></Category>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.id} {item.description} {item.status}
          </li>
        ))}
      </ul>
      {props.name}
    </div>
  );
};

export default Main;
