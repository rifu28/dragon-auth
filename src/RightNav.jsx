import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className="px-3 py-2 space-y-3">
      <h2 className="text-2xl font-semibold">Login with</h2>

      <button className="btn btn-outline w-full">
        {" "}
        <FaGoogle></FaGoogle>Google
      </button>
      <button className="btn btn-outline w-full">
        {" "}
        <FaGithub></FaGithub>Github
      </button>
    </div>
  );
};

export default RightNav;
