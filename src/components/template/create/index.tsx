import { ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useGetTaskList from "../../../hooks/api-hooks/get-task-list";
import usePostTask from "../../../hooks/api-hooks/post-task";
import { IRequestBody } from "../../../hooks/api-hooks/post-task/types";
import { FrontEndEndpoints } from "../../../lib/constants/fornt-end-enpoints";
import Button from "../../atom/button";
import HeaderMain from "../../atom/header/main";
import Input from "../../atom/input";
import SectionMain from "../../atom/section/main";
import Select from "../../atom/select";
import Textarea from "../../atom/textarea";
import H1 from "../../atom/title/h-1";

const CreatePage: FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = usePostTask();

  const { fetch } = useGetTaskList();

  const dataRef = useRef<IRequestBody>({
    title: "",
    completed: false,
    description: "",
    id: Math.random(),
  });

  return (
    <div
      onClick={() => console.log(dataRef.current)}
      className="w-full h-[100vh] bg-gray-300 py-5"
    >
      <HeaderMain className="flex items-center justify-center">
        <H1>Create Task Page</H1>
      </HeaderMain>
      <SectionMain>
        <form
          className="flex justify-start items-start gap-5 flex-wrap"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            console.log(dataRef);

            mutate({
              requestBody: dataRef.current,
              onSuccess: () => {
                fetch();
                navigate(FrontEndEndpoints.SHOW_TASKS);
              },
              onReject: () => {},
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
            />
          </div>

          <Textarea
            label={"Description"}
            className="min-w-[20vw] max-w-full h-[6rem]"
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              dataRef.current.description = e.target.value;
            }}
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

export default CreatePage;
