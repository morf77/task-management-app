import Icon from "../../../atom/icon";
import { ICardTaskStatusProps } from "./types";

const CardTaskStatus: FC<ICardTaskStatusProps> = ({ isCompleted }) => {
  return (
    <div
      className={`rounded-full  outline outline-8 border-8 w-[6rem] h-[6rem] flex justify-center items-center text-3xl text-blue-800 font-bold mt-5 ${
        isCompleted
          ? "bg-green-100 outline-green-200 border-green-400"
          : "bg-blue-100 outline-blue-120 border-blue-400"
      }`}
    >
      <Icon
        name={isCompleted ? "star" : "task"}
        className={`${
          isCompleted ? "fill-green-900" : "fill-blue-900 stroke-blue-900"
        }`}
        size={28}
      />
    </div>
  );
};

export default CardTaskStatus;
