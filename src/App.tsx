import { useState } from "react";
import { useTodoDispatch, useTodoSelector } from "./hooks/customHooks";
import { v4 } from "uuid";
import TodoForm from "./components/TodoForm";

import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  // console.log("App");
  const todoList = useTodoSelector((state) => state.Todo.todoList);
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
