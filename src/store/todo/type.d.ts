export interface Todo {
  id: number;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
}
