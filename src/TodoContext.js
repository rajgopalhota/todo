// TodoContext.js
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Create a context for managing todos
const TodoContext = createContext();

// Initial state for todos
const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

// Reducer function to handle state changes
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

// TodoProvider component to wrap your application and provide the context
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text });
  };

  const updateTodo = (id, text) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, text } });
  };

  const toggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, toggleTodo, deleteTodo }}
    >
      <div className="bg-gray-800 min-h-screen text-white">
        <div className="container mx-auto p-4">{children}</div>
      </div>
    </TodoContext.Provider>
  );
};

// Custom hook to use the TodoContext in your components
export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
