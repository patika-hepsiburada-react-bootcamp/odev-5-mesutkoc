import { useState, createContext, useContext, FC } from "react";
import {TodoContexts, Todo} from "./types";

const defaultTodos: TodoContexts = {
  todo: [
    { id: "1", description: "Make breakfast", status: "true" },
    { id: "2", description: "Wash car", status: "true" },
    { id: "3", description: "Going shop", status: "true" },
  ],
  setTodo: () => {},
};

export const TodoContext = createContext<TodoContexts>(defaultTodos);

const TodoProvider: FC = ({ children }) => {
  const [todo, setTodo] = useState<Todo[]>(defaultTodos.todo);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);

export default TodoProvider;
