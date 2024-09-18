import { ITextareaProps } from "./types";

const Textarea: FC<HTMLTextareaProps & ITextareaProps> = ({
  label,
  containerClassName,
  placeholder = "Write Your Text",
  className,
  onChange,
  rows = 3,
  ...props
}) => {
  return (
    <div
      className={`border-2 bg-blue-100 border-gray-300 flex gap-1 items-start rounded-md justify-between ${containerClassName}`}
    >
      {label && (
        <label
          className="p-2 font-semibold rounded-2xl h-5 text-blue-800 text-shadow select-none "
          htmlFor={props.id || props.name}
        >
          {label} :
        </label>
      )}
      <textarea
        id={props.id || props.name}
        rows={rows}
        name={props.name}
        className={`rounded-md border-l-2 ml-[-2px] border-blue-200  outline-none focus:border-blue-400 p-3 transition-colors resize-none elementScroll ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Textarea;
