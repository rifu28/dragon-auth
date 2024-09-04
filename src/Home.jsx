import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftNav from "./LeftNav";
import Navbar from "./Navbar";
import RightNav from "./RightNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h2 className="font-poppins font-semibold">This is home</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftNav></LeftNav>
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-3xl font-semibold">Center position</h2>
        </div>
        <div className="border">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
