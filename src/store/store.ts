import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoListSlice";

const todoStore = configureStore({
  reducer: {
    Todo: todoSlice.reducer,
  },
});

export type dispatchType = typeof todoStore.dispatch;
export type selectorType = ReturnType<typeof todoStore.getState>;
export default todoStore;
