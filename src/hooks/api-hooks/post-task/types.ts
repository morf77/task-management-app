export interface IHookProps {
  requestBody: IRequestBody;
  onSuccess?: () => void;
  onReject?: () => void;
}

export interface IServiceProps {
  requestBody: IRequestBody;
  onSuccess?: () => void;
  onReject?: () => void;
  setIsLoading: Setter<boolean>;
}

export interface IRequestBody {
  title: string;
  description: string;
  completed: boolean;
  id: number;
}
