// TodoApp.js
import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";

const TodoApp = () => {
  const { todos, addTodo, updateTodo, toggleTodo, deleteTodo } =
    useTodoContext();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Todo App</h1>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`border p-2 mb-2 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
            <button
              className="ml-2 text-red-500"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="ml-2 text-green-500"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
