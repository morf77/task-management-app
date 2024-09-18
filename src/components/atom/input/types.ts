import { ChangeEvent } from "react";

export interface IInputProps {
  label?: ReactNode;
  containerClassName?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
