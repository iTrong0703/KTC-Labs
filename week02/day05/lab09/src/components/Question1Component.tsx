import { useEffect, useState } from "react";
import type { Todo } from "../types/todo.types.ts";
import { addTodo, getAllTodos } from "../services/todoService.ts";
import TodoList from "./question1/TodoList.tsx";
import TodoForm from "./question1/TodoForm.tsx";

const Question1Component = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos()
      .then((data) => setTodos(data.slice(0, 5)))
      .catch(() => alert("Failed to load todos"));
  }, []);

  const handleAddTodo = async (title: string) => {
    try {
      const data = await addTodo(title);
      alert("Task added successfully!");
      setTodos((prev) => [...prev, data]);
    } catch (error) {
      alert("Failed to add task. Errror: " + error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Question1Component;
