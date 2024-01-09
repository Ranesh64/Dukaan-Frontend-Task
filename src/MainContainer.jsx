import Overview from "./Overview";
import Transactions from "./Transactions";

const MainContainer = () => {
  return (
    <main className="p-8 flex flex-col gap-8">
      <Overview />
      <Transactions />
    </main>
  );
};

export default MainContainer;
