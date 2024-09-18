import { axiosInstance } from "../../../lib/axios";
import { IServiceProps } from "./types";

const ENDPOINT = "/api/task/{taskId}";

const putService = async ({
  setIsLoading,
  onReject,
  onSuccess,
  taskId,
}: IServiceProps) => {
  const response = await axiosInstance
    .delete(ENDPOINT.replace("{taskId}", taskId))
    .then((e) => onSuccess?.())
    .catch(() => onReject?.())
    .finally(() => setIsLoading(false));

  return response;
};

export default putService;
