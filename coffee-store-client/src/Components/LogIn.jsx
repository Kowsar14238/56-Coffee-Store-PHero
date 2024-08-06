//Auth-Step 101:

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div>
      <button className="mx-2 my-5 p-2 rounded-md bg-slate-500 font-serif text-white">
        <Link to={"/"} className="flex justify-left items-center">
          <FaArrowLeft /> Home
        </Link>
      </button>
    </div>
  );
};

export default LogIn;
