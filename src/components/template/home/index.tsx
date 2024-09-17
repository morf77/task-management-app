import useGetTaskList from "../../../hooks/api-hooks/get-task-list";
import HeaderMain from "../../atom/header/main";
import SectionMain from "../../atom/section/main";
import H1 from "../../atom/title/h-1";

const HomePage: FC = () => {
  useGetTaskList();

  return (
    <div className="w-full h-[100vh] bg-gray-300 py-5 px-44">
      <HeaderMain className="flex items-center justify-center">
        <H1>HOME</H1>
      </HeaderMain>

      <SectionMain></SectionMain>
    </div>
  );
};

export default HomePage;
