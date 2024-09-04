import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="py-2">
      <h2 className="text-2xl font-semibold mb-8 px-5">All Categories</h2>
      {categories.map((category) => (
        <Link
          to={`${category.id}`}
          key={category.id}
          className="block mb-3 px-5"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftNav;
