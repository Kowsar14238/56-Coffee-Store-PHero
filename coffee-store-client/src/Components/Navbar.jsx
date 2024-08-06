import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";




const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <Link to={"/"} className="flex justify-left items-center">
        <HiHome /> Home
      </Link>
      <Link to={"/add-coffee"} className="flex justify-left items-center">
        <IoMdAdd /> Add Coffee
      </Link>
      <Link to={"/sign-up"} className="flex justify-left items-center">
        <FaRegEdit /> Sign Up
      </Link>
      <Link to={"/log-in"} className="flex justify-left items-center">
        <CiLogin /> Log In
      </Link>
    </div>
  );
};

export default Navbar;
