import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type todoType = {
  id: string;
  title: string;
  progress: "In Progress" | "Not Started" | "Completed";
  description: string;
};
type initialStateType = {
  todoList: todoType[];
};
const initialState: initialStateType = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todoListSlice",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<todoType>) {
      state.todoList.push(action.payload);
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todoList.filter((ele, index) => {
        if (ele.id === action.payload) {
          state.todoList.splice(index, 1);
          return ele;
        }
      });
    },
    editTodo(state, action: PayloadAction<{ index: number; data: todoType }>) {
      console.log(
        "from edit:",
        state.todoList[action.payload.index],
        action.payload.index
      );
      state.todoList[action.payload.index] = action.payload.data;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice;
