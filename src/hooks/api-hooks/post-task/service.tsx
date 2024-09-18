import { axiosInstance } from "../../../lib/axios";
import { IServiceProps } from "./types";

const ENDPOINT = "/api/task/";

const postService = async ({
  requestBody,
  setIsLoading,
  onReject,
  onSuccess,
}: IServiceProps) => {
  const response = await axiosInstance
    .post(ENDPOINT, requestBody)
    .then((e) => onSuccess?.())
    .catch(() => onReject?.())
    .finally(() => setIsLoading(false));

  return response;
};

export default postService;
