import { useState } from "react";
import { useTodo } from "../../contexts/TodoContext/";
import { nanoid } from "nanoid";
function Newtodo() {
  const { todo, setTodo } = useTodo();
  const [description, setDescription] = useState<string>("");
  const handleChange = (ss: string) => {
    setDescription(ss);
  };
  const addTodo = () => {
    const id = nanoid();
    setTodo([
      ...todo,
      {
        id: id,
        description: description,
        status: "true",
      },
    ]);
  };
  return (
    <div>
      <input
        placeholder="set some"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button onClick={() => addTodo()}>Add</button>
    </div>
  );
}

export default Newtodo;
