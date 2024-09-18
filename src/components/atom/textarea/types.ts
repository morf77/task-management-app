import { ChangeEvent } from "react";

export interface ITextareaProps {
  label?: ReactNode;
  containerClassName?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
