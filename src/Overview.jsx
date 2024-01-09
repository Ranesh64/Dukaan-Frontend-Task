import arrowIcon from "./assets/MainContainerIcons/arrow.svg";

const Overview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <span className="text-zinc-900 font-medium text-xl">Overview</span>
        <div className="flex gap-x-2 px-3.5 py-1.5 bg-white border border-primary rounded hover:cursor-pointer">
          <span className="text-base text-secondary">Last Month</span>
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-4 p-5 bg-white rounded-lg  flex-grow custom-shadow">
          <span className="font-normal text-sm text-secondary">
            Online orders
          </span>
          <span className="text-[32px] text-primary font-medium">231</span>
        </div>
        <div className="flex flex-col gap-4 p-5 bg-white rounded-lg shadow-sm flex-grow custom-shadow">
          <span className="font-normal text-sm text-secondary ">
            Amount received
          </span>
          <span className="text-[32px] text-primary font-medium">
            &#8377; 23,92,312.19
          </span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
