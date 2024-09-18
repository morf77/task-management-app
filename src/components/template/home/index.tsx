import useGetTaskList from "../../../hooks/api-hooks/get-task-list";
import HeaderMain from "../../atom/header/main";
import SectionMain from "../../atom/section/main";
import SkeletonFetchingLoading from "../../atom/skeletion";
import H1 from "../../atom/title/h-1";
import CardTask from "../../organism/cards/task-card";

const HomePage: FC = () => {
  const { data, loading, fetch } = useGetTaskList();

  return (
    <div className="w-full h-[100vh] bg-gray-300 py-5">
      <HeaderMain className="flex items-center justify-center">
        <H1>HOME PAGE</H1>
      </HeaderMain>

      <SectionMain className="flex flex-wrap justify-between">
        {(data?.results || [null, null, null, null, null]).map(
          (item, index) => (
            <SkeletonFetchingLoading
              className="min-h-[20rem]"
              isLoading={loading}
              key={item?.id || index}
            >
              <CardTask
                task={item}
                fetch={fetch}
                className={`mx-1 mb-5 ${
                  index + 1 === data?.results.length ? "mr-auto ml-2" : ""
                }`}
              />
            </SkeletonFetchingLoading>
          )
        )}
      </SectionMain>
    </div>
  );
};

export default HomePage;
