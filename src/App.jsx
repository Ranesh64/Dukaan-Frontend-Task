import Header from "./Header";
import MainContainer from "./MainContainer";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="bg-primary flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
