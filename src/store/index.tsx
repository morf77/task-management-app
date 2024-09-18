import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./api-management-slice";

export const appStore = configureStore({
  reducer: {
    apiReducer: apiReducer,
  },
});

export type TAppState = ReturnType<typeof appStore.getState>;

export type TAppDispatch = typeof appStore.dispatch;
