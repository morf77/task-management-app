import { useState } from "react";
import putService from "./service";
import { IHookProps } from "./types";

const usePutTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = ({ requestBody, onSuccess, onReject, taskId }: IHookProps) => {
    setIsLoading(true);
    putService({
      requestBody,
      onSuccess,
      onReject,
      setIsLoading,
      taskId,
    }).finally(() => setIsLoading(false));
  };

  return {
    mutate,
    isLoading,
  };
};

export default usePutTask;
