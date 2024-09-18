import { useEffect, useState } from "react";
import { IDropdown } from "./types";
import useClickOutside from "../../../hooks/helper-hooks/use-click-outside";

const Select: FC<PropsWithChildren<HTMLSelectProps & IDropdown>> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    props.setIsOpen?.(isOpen);
  }, [isOpen, props]);

  const handlerSelection = (value: string) => {
    props.onSelect && props.onSelect(value);
    setSelectedValue(value);

    if (props.closeOnSelect) {
      setIsOpen(false);
    }
  };

  return (
    <div className="border-2 bg-blue-100 border-gray-300 flex gap-1 items-center justify-between rounded-md group w-full">
      <div className={``}>
        {props.label && (
          <label
            className="p-2 font-semibold rounded-2xl h-full text-blue-800 select-none	"
            htmlFor={props.id || props.name}
          >
            {props.label} :
          </label>
        )}
      </div>
      <select
        name={props.name}
        id={props.id || props.name}
        className={`outline-none bg-gray-200 p-2 rounded-md h-full focus:border-l-2 focus:border-l-blue-400 transition-colors duration-300 ${props.className}`}
        value={selectedValue}
        onChange={(e) => handlerSelection(e.target.value)}
        // defaultValue={props.defaultValue}
      >
        <option className="p-5" hidden>
          {props.placeholder || "Select"}
        </option>

        {props.contentData?.map((item) => (
          <option className="bg-gray-500 text-gray-100" value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {props.footerData && (
        <div className="py-2 text-sm text-gray-900 ">
          <div className={""}>{props.footerData}</div>
        </div>
      )}
    </div>
  );
};

export default Select;
