import React from "react";

function SimpleToDoList() {
  return (
    <div className="todo__container bg-gray-800">
      <h2 className="text-2xl text-blue-300 mb-4">Todo list</h2>
      <div className="todo__list">
        <div className="bg-white">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-2 text-blue-400  cursor-pointer">
              <span>learn react</span>
            </div>
            <button className="cursor-pointer">✅</button>
            <button className="cursor-pointer">❌</button>
          </div>

          <div className="flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-2 text-red-600 line-through cursor-pointer">
              <span>Go shopping</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
              &#10006;
            </button>
          </div>
        </div>
      </div>
      <div className="todo__input">
        <input
          type="text"
          placeholder="add a new todo..."
          className="p-1 bg-white text-black"
        />
        <button className="px-4 bg-white text-black">Add</button>
      </div>
    </div>
  );
}

export default SimpleToDoList;
