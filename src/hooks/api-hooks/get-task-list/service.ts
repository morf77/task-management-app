import { axiosInstance } from "../../../lib/axios";
import { ITaskModel } from "../../../types/models/task";
import { TBaseResponse } from "../types";

const ENDPOINT = "/api/task";

const getService = async () => {
  try {
    const response = await axiosInstance.get<TBaseResponse<ITaskModel>>(
      ENDPOINT
    );

    return response;
  } catch (er) {
    return null;
  }
};

export default getService;
