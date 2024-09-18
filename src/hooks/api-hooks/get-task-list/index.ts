import { useEffect, useState } from "react";
import { TAppState } from "../../../store";
import { ITaskModel } from "../../../types/models/task";
import { useAppDispatch, useAppSelector } from "../../store-hooks";
import { TBaseResponse } from "../types";
import getService from "./service";
import { setTaskData } from "../../../store/api-management-slice/index";

// we can here add some customization for api response like passing throw DTO or handling error
const useGetTaskList = () => {
  // const cashData = useAppSelector(
  //   (state: TAppState) => state?.apiReducer?.getListTasks
  // );
  const dispatch = useAppDispatch();

  const [loading, setIsLoading] = useState<boolean>(false);

  const [state, setState] = useState<{
    data: TBaseResponse<ITaskModel> | null;
  }>({
    data: null,
  });

  const fetch = () => {
    !loading && setIsLoading(true);
    getService()
      .then((res) => {
        res?.data?.results && dispatch(setTaskData(res?.data.results));
        setState({
          data: res?.data || null,
        });
      })
      .catch((er) => console.log(er))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data: state.data, fetch, loading };
};

export default useGetTaskList;
