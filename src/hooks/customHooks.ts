import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { dispatchType, selectorType } from "../store/store";
type customDispatchType = () => dispatchType;

export const useTodoDispatch: customDispatchType = useDispatch;
export const useTodoSelector: TypedUseSelectorHook<selectorType> = useSelector;
