import { useState, createContext, useContext, FC } from "react";
import {TodoContexts, Todo} from "./types";

const defaultTodos: TodoContexts = {
  todo: [
    { id: "1", description: "Make breakfast", status: "true" },
    { id: "2", description: "Wash car", status: "true" },
    { id: "3", description: "Going shop", status: "true" },
  ],
  deletedTodo: [{ id: "4", description: "Going sport", status: "true" }],
  setTodo: () => {},
  setDeletedTodo: () => {},
};

export const TodoContext = createContext<TodoContexts>(defaultTodos);

const TodoProvider: FC = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>(defaultTodos.todo);
  const [deletedTodo,setDeletedTodo] = useState<Todo[]>(defaultTodos.deletedTodo)
  return (
    <TodoContext.Provider
      value={{ todo, setTodo, deletedTodo, setDeletedTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
