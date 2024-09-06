import React, { useEffect, useState } from "react";

const Center = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="py-2">
      <h2 className="text-2xl font-semibold">Center position :{news.length}</h2>
    </div>
  );
};

export default Center;
