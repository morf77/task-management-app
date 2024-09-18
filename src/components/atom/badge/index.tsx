import { IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, theme, className }) => {
  return (
    <div
      className={`bg-${theme}-200 text-${theme}-900 p-3 ${className} rounded-lg text-center font-semibold `}
    >
      <span className="hidden bg-green-200 text-green-900" />
      {typeof title === "string" ? <p>{title}</p> : <div>{title}</div>}{" "}
    </div>
  );
};

export default Badge;
