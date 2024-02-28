import React, { FormEvent, useState } from "react";
import { Modal } from "@mui/material";
import { todoType } from "../store/todoListSlice";
import css from "./TodoItem.module.css";
import { editTodo } from "../store/todoListSlice";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { useTodoDispatch } from "../hooks/customHooks";
import { deleteTodo } from "../store/todoListSlice";
import { v4 } from "uuid";
type propType = {
  data: todoType;
  index: number;
};
type infoStateType = {
  title: string;
  description: string;
  progress: "In Progress" | "Not Started" | "Completed";
};

const TodoItem = ({ data, index }: propType) => {
  const { title, id, description, progress } = data;
  console.log({ index });
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState<infoStateType>({
    title,
    description,
    progress,
  });
  const dispatch = useTodoDispatch();
  let progressStyle;
  if (progress === "Completed") progressStyle = "completed";
  else if (progress === "In Progress") progressStyle = "inProgress";
  else progressStyle = "notStarted";
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleOpen = () => setOpen(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const data = Object.fromEntries(formData) as todoType;

    console.log({ data });

    dispatch(editTodo({ index, data }));
    setOpen(false);
  };
  return (
    <div className={css.todoCard}>
      <div className={css.cardIcons}>
        <div className={css.editIcon} onClick={handleOpen}>
          {" "}
          <MdOutlineEdit />
        </div>
        <div className={css.deleteIcon}>
          <MdDeleteOutline onClick={handleDelete} style={{ color: "red" }} />
        </div>
      </div>

      <h1>{title}</h1>
      <p>{description}</p>
      <p className={`${css[progressStyle]} ${css.progress}`}>{progress}</p>

      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={css.modalFormContainer}>
          <form onSubmit={handleSubmit} className={css.modalForm}>
            <div className={css.exitIcon} onClick={() => setOpen(false)}>
              <IoMdCloseCircleOutline style={{ color: "red" }} />
            </div>

            <input
              type="text"
              placeholder="Enter Todo Title:"
              name="title"
              onChange={(event) => {
                setInfo((prev) => {
                  return { ...prev, title: event.target.value };
                });
              }}
              value={info.title}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Enter Todo Description"
              name="description"
              value={info.description}
              onChange={(event) => {
                setInfo((prev) => {
                  return { ...prev, description: event.target.value };
                });
              }}
              required
            />
            <br />
            <select
              name="progress"
              id="progress"
              onChange={(event) => {
                const value = event.target.value;
                if (
                  value === "In Progress" ||
                  value === "Not Started" ||
                  value === "Completed"
                ) {
                  setInfo((prev) => {
                    return { ...prev, progress: value };
                  });
                } else {
                  // Handle invalid input (optional)
                }
              }}
              value={info.progress}
            >
              <option value="Not Started" selected>
                Not Started
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <br />
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TodoItem;
