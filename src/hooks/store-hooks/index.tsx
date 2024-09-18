import { useDispatch, useSelector } from "react-redux";
import type { TAppState, TAppDispatch } from "../../store";

export const useAppDispatch = useDispatch.withTypes<TAppDispatch>();
export const useAppSelector = useSelector.withTypes<TAppState>();
