import { PropsWithChildren } from "react";

// We can customize props but i prefer to pass it directly!
const LayoutMain: FC<PropsWithChildren<HTMLDivProps>> = (props) => {
  const { children, className, ...divProps } = props;
  return (
    <div
      className={`w-full h-[100vh] bg-gray-300 py-5 px-[5%] ${className}`}
      {...divProps}
    >
      {props.children}
    </div>
  );
};

export default LayoutMain;
