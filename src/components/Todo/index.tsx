import { useState } from "react";
import { useTodo, today } from "../../contexts/TodoContext/";
import { useCat } from "../../contexts/CategoryContext";
import { nanoid } from "nanoid";

function Newtodo() {
  const { todo, setTodo, setAllTodo, allTodo } = useTodo();
  const { setCategory } = useCat();
  const [description, setDescription] = useState<string>("");
  const handleChange = (ss: string) => {
    setDescription(ss);
  };
  const addTodo = () => {
    const id = nanoid();
    setCategory("ACTIVE");
    setTodo([
      ...todo,
      {
        id: id,
        description: description,
        status: "true",
        date: today,
      },
    ]);
    setAllTodo([
      ...allTodo,
      {
        id: id,
        description: description,
        status: "true",
        date: today,
      },
    ]);
  };
  return (
    <div className="addTodo">
      <input
        className="todoInput"
        type="text"
        placeholder="What is your purpose?"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}

export default Newtodo;
