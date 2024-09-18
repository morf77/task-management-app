export interface IButtonProps {
  label?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  containerClassName?: string;
  name?: string;
  placeholder?: string;
  onClick?: () => void;
  isLoading?: boolean;
}
