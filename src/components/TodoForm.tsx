import React, { FormEvent } from "react";
import { addTodo } from "../store/todoListSlice";
import { useTodoDispatch } from "../hooks/customHooks";
import { todoType } from "../store/todoListSlice";
import { v4 } from "uuid";

const TodoForm = () => {
  const dispatch = useTodoDispatch();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData) as todoType;

    console.log({ data });

    dispatch(addTodo({ ...data, id: v4() }));
    event.currentTarget.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo Title:"
          name="title"
          required
        />
        <input
          type="text"
          placeholder="Enter Todo Description"
          name="description"
          required
        />
        <select name="progress" id="progress">
          <option value="Not Started" selected>
            Not Started
          </option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
