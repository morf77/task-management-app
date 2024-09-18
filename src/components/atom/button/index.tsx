import Spinner from "../spinner";
import { IButtonProps } from "./types";

const Button: FC<HTMLInputProps & IButtonProps> = ({
  containerClassName,
  className,
  onChange,
  isLoading,
  type,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`py-3 flex items-center justify-center rounded-lg bg-gray-200 border-2 border-blue-400 hover:bg-blue-300 transition-colors duration-200 px-5 ${className}`}
    >
      {props.children || "Submit"}
      {isLoading && <Spinner color="primary" size="small" />}
    </button>
  );
};

export default Button;
