export interface Todo {
  id: string;
  description: string;
  status: string;
}

export interface TodoContexts {
  todo: Todo[];
  deletedTodo: Todo[];
  setTodo: (data: Todo[]) => void;
  setDeletedTodo: (data: Todo[]) => void;
}