import BreakingNews from "./BreakingNews";
import Center from "./Center";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftNav></LeftNav>
        </div>
        <div className="md:col-span-2 border">
          <Center></Center>
        </div>
        <div className="border">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
