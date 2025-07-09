import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function SimpleToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    if (newTodo.trim() === "") return;

    const newItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([newItem, ...todos]); // thêm newItem vào đầu arr, các ptu cũ ...todos ở phía sau (Spread)
    setNewTodo("");
  };

  const handleComplete = (id: number) => {
    setTodos(
      todos.map(
        (todo) => (todo.id === id ? { ...todo, completed: true } : todo) // dùng spread sao chép ptu cũ và ghi đè completed
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo__container bg-gray-800 p-4 rounded text-white w-[400px]">
      <h2 className="text-2xl text-blue-300 mb-4">Todo List</h2>

      <div className="todo__list bg-white text-black rounded">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center px-4 py-2 border-b border-gray-200"
          >
            <div
              className={`flex items-center gap-2 ${
                todo.completed ? "text-red-600 line-through" : "text-blue-600"
              }`}
            >
              <span>{todo.text}</span>
            </div>
            <div className="flex gap-2">
              {!todo.completed && (
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="cursor-pointer"
                >
                  ✅
                </button>
              )}
              <button
                onClick={() => handleDelete(todo.id)}
                className="cursor-pointer"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="todo__input mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-1 bg-white text-black rounded"
        />
        <button
          onClick={handleAdd}
          className="px-4 bg-white text-black rounded hover:bg-gray-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default SimpleToDoList;
