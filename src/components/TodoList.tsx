import React from "react";
import css from "./TodoList.module.css";
import { useTodoSelector } from "../hooks/customHooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const ctx = useTodoSelector((state) => state.Todo.todoList);
  console.log({ ctx });
  return (
    <div className={css.todoCardContainer}>
      {ctx.map((item, index) => (
        <TodoItem key={item.id} data={item} index={index} />
      ))}
    </div>
  );
};

export default TodoList;
