import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const Center = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="py-2">
      {news.map((aNews) => (
        <NewsCard key={aNews._id} news={aNews}></NewsCard>
      ))}
    </div>
  );
};

export default Center;
