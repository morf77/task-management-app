export type TBaseResponse<T> = {
  count: number;
  next: unknown;
  previous: unknown;
  results: Array<T>;
};
