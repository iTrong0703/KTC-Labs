export interface Todo {
  id: number;
  title: string;
}

export interface TodoListProps {
  todos: Todo[];
}

export interface TodoFormProps {
  onAdd: (title: string) => void;
}

export interface FormValues {
  title: string;
}
