import { axiosInstance } from "../../../lib/axios";
import { ITaskModel } from "../../../types/models/task";

const ENDPOINT = "/api/tasks";

const getService = async () => {
  try {
    const response = await axiosInstance.get<ITaskModel>(ENDPOINT);

    console.log(response);

    return response;
  } catch (er) {
    console.log(er);
    return null;
  }
};

export default getService;
