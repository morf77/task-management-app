export interface IHookProps {
  requestBody: IRequestBody;
  onSuccess?: () => void;
  onReject?: () => void;
  taskId: string;
}

export interface IServiceProps {
  requestBody: IRequestBody;
  onSuccess?: () => void;
  onReject?: () => void;
  setIsLoading: Setter<boolean>;
  taskId: string;
}

export interface IRequestBody {
  title: string;
  description: string;
  completed: boolean;
  id: number;
}
