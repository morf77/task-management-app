import { useNavigate } from "react-router-dom";
import useDeleteTask from "../../../../hooks/api-hooks/delete-task-list";
import { FrontEndEndpoints } from "../../../../lib/constants/fornt-end-enpoints";
import { ITaskModel } from "../../../../types/models/task";
import Badge from "../../../atom/badge";
import Icon from "../../../atom/icon";
import Spinner from "../../../atom/spinner";
import CardTaskStatus from "../../../molecule/cards/task-status";

const CardTask: FC<{
  task: ITaskModel | null;
  className?: string;
  fetch?: () => void;
}> = ({ task, className, fetch }) => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useDeleteTask();

  const iconClassNames = task?.completed
    ? "fill-green-400 stroke-green-800"
    : "fill-blue-400 stroke-blue-800";

  return (
    <div
      className={`border flex flex-col px-6 py-4 items-center gap-5 ${
        task?.completed
          ? "border-green-400 shadow-md shadow-green-200 bg-green-100"
          : "border-blue-400 shadow-md shadow-blue-200 bg-blue-100"
      } ${className}`}
    >
      <div className="flex justify-between w-full ">
        <Icon name="paperClip" className={iconClassNames} size={24} />

        <div className="flex gap-3">
          <button
            className="flex"
            onClick={() =>
              navigate(
                FrontEndEndpoints.EDIT_TASKS.replace(
                  "{taskId}",
                  task?.id?.toString() || ""
                )
              )
            }
          >
            <Icon
              name="edit"
              className={`hover:scale-125 transition-transform duration-150 ${iconClassNames}`}
            />
          </button>
          {isLoading ? (
            <Spinner />
          ) : (
            <button
              onClick={() =>
                mutate({
                  taskId: task?.id.toString() || "",
                  onSuccess: () => fetch?.(),
                })
              }
            >
              <Icon
                name="trash"
                className={`hover:scale-125 transition-transform duration-150 ${iconClassNames}`}
              />
            </button>
          )}
        </div>
      </div>

      <div className="px-4">
        <Badge title={task?.title} theme={task?.completed ? "green" : "blue"} />
        <CardTaskStatus isCompleted={!!task?.completed} />
      </div>

      <div className=" text-start min-w-[5rem] max-w-[5rem] truncate mt-5">
        {task?.description}
      </div>
    </div>
  );
};

export default CardTask;
