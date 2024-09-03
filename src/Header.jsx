import logo from "../src/assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-10">
      <img className="mx-auto mb-3" src={logo} alt="" />
      <p className="text-xl font-semibold mb-2 text-zinc-800">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl"> {moment().format("MMMM Do YYYY, h:mm:ss a")} </p>
    </div>
  );
};

export default Header;
