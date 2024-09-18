import { ChangeEvent, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useGetTaskList from "../../../hooks/api-hooks/get-task-list";
import { IRequestBody } from "../../../hooks/api-hooks/post-task/types";
import usePutTask from "../../../hooks/api-hooks/put-task";
import { FrontEndEndpoints } from "../../../lib/constants/fornt-end-enpoints";
import Button from "../../atom/button";
import HeaderMain from "../../atom/header/main";
import Input from "../../atom/input";
import SectionMain from "../../atom/section/main";
import Select from "../../atom/select";
import Textarea from "../../atom/textarea";
import H1 from "../../atom/title/h-1";
import { useAppSelector } from "../../../hooks/store-hooks";
import { TAppState } from "../../../store";

const EditPage: FC = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { mutate, isLoading } = usePutTask();

  const cashData = useAppSelector(
    (state: TAppState) => state?.apiReducer?.getListTasks
  );

  //   This is not a good approach but cause of lack of time i do this !
  const taskId = pathname.slice(6);

  const task = cashData.data?.find((item) => item.id.toString() === taskId);

  const { fetch } = useGetTaskList();

  const dataRef = useRef<IRequestBody>({
    title: task?.title || "",
    completed: !!task?.completed,
    description: task?.description || "",
    id: task?.id || 0,
  });

  return (
    <div className="w-full h-[100vh] bg-gray-300 py-5">
      <HeaderMain className="flex items-center justify-center">
        <H1>Edit Task Page</H1>
      </HeaderMain>
      <SectionMain>
        <form
          className="flex justify-start items-start gap-5 flex-wrap"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            mutate({
              requestBody: dataRef.current,
              onSuccess: () => {
                fetch();
                navigate(FrontEndEndpoints.SHOW_TASKS);
              },
              onReject: () => {},
              taskId: taskId,
            });
          }}
        >
          <div className="flex flex-col gap-2">
            <Input
              label={"title"}
              name="title"
              className="w-[15rem] h-full"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dataRef.current.title = e.target.value;
              }}
              defaultValue={dataRef.current.title}
            />
            <Select
              name="hasCompleted"
              placeholder={"Default No"}
              className="w-[11rem]"
              onSelect={(v) => {
                dataRef.current.completed = v == 1 ? true : false;
              }}
              label={"Is Completed"}
              contentData={[
                { label: "yes", value: 1 },
                {
                  label: "no",
                  value: 0,
                },
              ]}
              // defaultValue={!!dataRef.current.completed ? 1 : 0}
            />
          </div>

          <Textarea
            label={"Description"}
            className="min-w-[20vw] max-w-full h-[6rem]"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              console.log(dataRef.current.completed);
              dataRef.current.description = e.target.value;
            }}
            defaultValue={dataRef.current.description}
          />

          <Button
            isLoading={isLoading}
            type="submit"
            className="ml-auto mt-auto"
          />
        </form>
      </SectionMain>
    </div>
  );
};

export default EditPage;
