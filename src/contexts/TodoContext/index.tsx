import { useState, createContext, useContext, FC } from "react";
import { TodoContexts, Todo } from "./types";

export const today = new Date().toLocaleDateString();
export const currentTime = new Date().toLocaleString();
export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Friday",
  "Thursday",
  "Saturday",
];

const defaultTodos: TodoContexts = {
  todo: [
    { id: "1", description: "Make breakfast", status: "true", date: today },
    { id: "2", description: "Wash car", status: "true", date: today },
    { id: "3", description: "Going shop", status: "true", date: today },
  ],
  deletedTodo: [
    { id: "4", description: "Going sport", status: "false", date: today },
  ],
  allTodo: [
    { id: "1", description: "Make breakfast", status: "true", date: today },
    { id: "2", description: "Wash car", status: "true", date: today },
    { id: "3", description: "Going shop", status: "true", date: today },
    { id: "4", description: "Going sport", status: "false", date: today },
  ],
  setTodo: () => {},
  setDeletedTodo: () => {},
  setAllTodo: () => {},
};

export const TodoContext = createContext<TodoContexts>(defaultTodos);

const TodoProvider: FC = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>(defaultTodos.todo);
  const [deletedTodo, setDeletedTodo] = useState<Todo[]>(
    defaultTodos.deletedTodo
  );
  const [allTodo, setAllTodo] = useState<Todo[]>(defaultTodos.allTodo);
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        deletedTodo,
        setDeletedTodo,
        setAllTodo,
        allTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
