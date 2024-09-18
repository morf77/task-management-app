import { IInputProps } from "./types";

const Input: FC<HTMLInputProps & IInputProps> = ({
  label,
  containerClassName,
  placeholder = "Write Your Text",
  className,
  onChange,
  ...props
}) => {
  return (
    <div
      className={`border-2 bg-blue-100 border-gray-300 flex gap-1 items-center justify-between rounded-md ${containerClassName}`}
    >
      {label && (
        <label
          className="p-2 font-semibold rounded-2xl h-full text-blue-800 text-shadow select-none"
          htmlFor={props.id || props.name}
        >
          {label} :
        </label>
      )}
      <input
        className={`rounded-md border-l-2 ml-[-2px] border-blue-200  outline-none focus:border-blue-400 p-3 h-10 transition-colors ${className}`}
        {...props}
        onChange={onChange}
        id={props.id || props.name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
