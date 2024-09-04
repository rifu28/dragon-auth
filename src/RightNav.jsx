import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from "./assets/qZone1.png";
import qzone2 from "./assets/qZone2.png";
import qzone3 from "./assets/qZone3.png";

const RightNav = () => {
  return (
    <div>
      <div className="px-3 py-2 space-y-3 mb-6">
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
      <div className="px-3 py-2 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Find us on</h2>

        <a className="flex items-center gap-3 p-3 border rounded-t-lg" href="">
          <FaFacebook></FaFacebook> Facebook
        </a>
        <a className="flex items-center gap-3 p-3 border-x" href="">
          <FaTwitter></FaTwitter> Twitter
        </a>
        <a className="flex items-center gap-3 p-3 border rounded-b-lg" href="">
          <FaInstagram></FaInstagram> Instagram
        </a>
      </div>
      <div className="px-3 py-2 mb-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-3">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
