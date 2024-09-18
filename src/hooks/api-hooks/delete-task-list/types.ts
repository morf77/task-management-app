export interface IHookProps {
  onSuccess?: () => void;
  onReject?: () => void;
  taskId: string;
}

export interface IServiceProps {
  onSuccess?: () => void;
  onReject?: () => void;
  setIsLoading: Setter<boolean>;
  taskId: string;
}

export interface IRequestBody {}
