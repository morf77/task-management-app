import { Link, useLocation } from "react-router-dom";
import { FrontEndEndpoints } from "../../../lib/constants/fornt-end-enpoints";

const Navigation: FC = () => {
  const { pathname } = useLocation();

  const classMaker = (endpoint: FrontEndEndpoints) => {
    return `py-2 px-3 rounded-full flex items-center font-semibold transition-colors duration-200 ${
      pathname === endpoint
        ? "pointer-events-none bg-blue-600 text-blue-100 border-blue-700 border-4"
        : "bg-blue-200 text-blue-600 hover:brightness-110 "
    }`;
  };

  return (
    <ul className="w-full bg-blue-300 flex gap-2 p-2 rounded-md shadow-lg shadow-blue-300 mb-5">
      <li className="flex">
        <Link
          className={`${classMaker(FrontEndEndpoints.SHOW_TASKS)}`}
          to={"/"}
        >
          Home
        </Link>
      </li>
      <li className="flex">
        <Link
          className={`${classMaker(FrontEndEndpoints.CREATE_TASK)}`}
          to={"/create"}
        >
          Create
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
