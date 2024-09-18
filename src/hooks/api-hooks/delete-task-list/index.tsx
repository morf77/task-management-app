import { useState } from "react";
import putService from "./service";
import { IHookProps } from "./types";

const useDeleteTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = ({ onSuccess, onReject, taskId }: IHookProps) => {
    setIsLoading(true);
    putService({
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

export default useDeleteTask;
