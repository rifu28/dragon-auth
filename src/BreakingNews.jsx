import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex my-7 items-center bg-gray-100 px-3 py-2">
      <div>
        <button className="bg-pink-500 font-semibold border-2 border-pink-200 text-white px-3 py-1">
          Latest
        </button>
      </div>
      <div>
        <Marquee pauseOnHover={true}>
          <Link to="/" className="mr-12 font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to="/" className="mr-12 font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to="/" className="mr-12 font-semibold">
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
