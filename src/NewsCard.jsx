import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, details } = news;
  return (
    <div className="max-w-full flex flex-col mx-auto bg-white border border-gray-200 rounded-2xl shadow mb-5 dark:bg-gray-800 dark:border-gray-700 my-2">
      <a href="#">
        <img className="h-80 w-1/2 mx-auto" src={thumbnail_url} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <span>
              <Link className="text-blue-700 font-semibold">...Read More</Link>
            </span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
