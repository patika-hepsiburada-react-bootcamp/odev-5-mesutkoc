export interface Todo {
  id: string;
  description: string;
  status: string;
}

export interface TodoContexts {
  todo: Todo[];
  setTodo: (data: Todo[]) => void;
}