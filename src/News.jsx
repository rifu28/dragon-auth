import React from "react";
import Header from "./Header";
import RightNav from "./RightNav";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details of {id}</h2>
        </div>
        <div>
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default News;
