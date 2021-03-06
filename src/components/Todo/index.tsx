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
    const data = {
      id: id,
      description: description,
      status: "true",
      date: today,
    };
    if (description !== "") {
      setTodo([...todo, data]);
      setAllTodo([...allTodo, data]);
    } else {
      alert("Please type todo!");
    }
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
