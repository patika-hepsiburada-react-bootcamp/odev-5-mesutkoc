export interface Todo {
  id: string;
  description: string;
  status: string;
  date: string;
}

export interface TodoContexts {
  todo: Todo[];
  deletedTodo: Todo[];
  allTodo: Todo[];
  setTodo: (data: Todo[]) => void;
  setDeletedTodo: (data: Todo[]) => void;
  setAllTodo: (data: Todo[]) => void;
}