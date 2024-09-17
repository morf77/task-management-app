import { configureStore } from "@reduxjs/toolkit";

export const globalStore = configureStore({
  reducer: {},
});

export type globalState = ReturnType<typeof globalStore.getState>;

export type globalDispatch = typeof globalStore.dispatch;
