import { useState } from "react";
import postService from "./service";
import { IHookProps } from "./types";

const usePostTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = ({ requestBody, onSuccess, onReject }: IHookProps) => {
    setIsLoading(true);
    postService({ requestBody, onSuccess, onReject, setIsLoading }).finally(
      () => setIsLoading(false)
    );
  };

  return {
    mutate,
    isLoading,
  };
};

export default usePostTask;
