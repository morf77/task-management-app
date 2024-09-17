import getService from "./service";

const useGetTaskList = () => {
  const response = getService();

  console.log(response);
};

export default useGetTaskList;
