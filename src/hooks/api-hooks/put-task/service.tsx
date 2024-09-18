import { axiosInstance } from "../../../lib/axios";
import { IServiceProps } from "./types";

const ENDPOINT = "/api/task/{taskId}";

const putService = async ({
  requestBody,
  setIsLoading,
  onReject,
  onSuccess,
  taskId,
}: IServiceProps) => {
  const response = await axiosInstance
    .put(ENDPOINT.replace("{taskId}", taskId), requestBody)
    .then((e) => onSuccess?.())
    .catch(() => onReject?.())
    .finally(() => setIsLoading(false));

  return response;
};

export default putService;
