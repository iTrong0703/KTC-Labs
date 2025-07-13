import axiosClientTodo from "../api/axiosClientTodo.ts";
import type { Todo } from "../types/todo.types.ts";

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await axiosClientTodo.get<Todo[]>("/todos");
  return response.data;
};

// post title của mình lên thì nó gửi trả về title cảu mình
export const addTodo = async (title: string): Promise<Todo> => {
  const response = await axiosClientTodo.post<Todo>("/todos", {
    title,
  });
  return response.data;
};
