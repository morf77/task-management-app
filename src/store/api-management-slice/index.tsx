import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITaskModel } from "../../types/models/task";

export interface IApiState {
  getListTasks: {
    apiCalled: boolean;
    status: "failed" | "success" | null;
    isLoading: boolean;
    data: Array<ITaskModel> | null;
  };
}

const initialState: IApiState = {
  getListTasks: {
    apiCalled: false,
    data: null,
    isLoading: false,
    status: null,
  },
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setTaskData: (state, action: PayloadAction<Array<ITaskModel>>) => {
      state.getListTasks.apiCalled = true;
      state.getListTasks.status = "success";
      state.getListTasks.data = action.payload || null;
    },
    apiLoading: (state, action: PayloadAction<boolean>) => {
      state.getListTasks.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { apiLoading, setTaskData } = apiSlice.actions;

export default apiSlice.reducer;
