import searchIcon from "./assets/MainContainerIcons/Search.svg";
import sortIcon from "./assets/MainContainerIcons/Sort.svg";
import downloadIcon from "./assets/MainContainerIcons/download.svg";
import arrow from "./assets/MainContainerIcons/Triangle-Icon.svg";
import infoIcon from "./assets/MainContainerIcons/Info.svg";
import previousArrow from "./assets/MainContainerIcons/left.svg";
import nextArrow from "./assets/MainContainerIcons/right.svg";

const tableData = () => {
  const value = {
    orderId: 282109,
    orderDate: "9 Jan, 2024",
    orderAmount: "1,278.23",
    transactionFees: 22,
  };
  const myArray = new Array(20).fill(value);
  return myArray;
};

const paginationArr = [1, "...", 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Transactions = () => {
  return (
    <div  >
      <div className="text-primary font-medium text-xl mb-5">
        Transactions | This Month
      </div>
      <div
        className="bg-white px-3 pt-3 pb-6 rounded-lg flex flex-col gap-3"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <div className="flex justify-between items-center">
          <div className="px-4 py-2.5 bg-transparent border border-primary rounded">
            <div className="flex items-center gap-x-2">
              <div>
                <img src={searchIcon} />
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="px-3 py-1.5 bg-transparent border border-primary rounded">
              <div className="flex gap-x-1.5 items-center">
                <span className="text-base text-secondary">Sort</span>
                <img src={sortIcon} />
              </div>
            </div>
            <div className="p-2 bg-transparent border border-primary rounded">
              <img src={downloadIcon} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <table className="w-full">
            <thead>
              <tr className="bg-secondary">
                <td className="px-3 py-2.5 w-1/4 rounded-l text-sm text-secondary font-medium ">
                  Order ID
                </td>
                <td className="px-3 py-2.5 w-1/4 ">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-secondary font-medium">
                      Order date
                    </span>
                    <img src={arrow} />
                  </div>
                </td>
                <td className="text-right px-3 py-2.5 w-1/4 text-sm text-secondary font-medium">
                  Order Amount
                </td>
                <td className="text-right px-3 py-2.5 w-1/4 rounded-r ">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-sm text-secondary font-medium">
                      Transaction fees
                    </span>
                    <img src={infoIcon} alt="info" />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {tableData().map((data, index) => {
                return (
                  <tr key={index} className="border-b ">
                    <td className="px-3 py-2.5 w-1/4 text-sm text-sky-700 font-medium mr-10">{`#${data.orderId}`}</td>
                    <td className="px-3 py-2.5 w-1/4 tex-sm text-primary">
                      {data.orderDate}
                    </td>
                    <td className="text-right px-3 py-2.5 w-1/4 tex-sm text-primary">
                      &#8377; {`${data.orderAmount}`}
                    </td>
                    <td className="text-right px-3 py-2.5 w-1/4 tex-sm text-primary">
                      &#8377; {`${data.transactionFees}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex gap-1.5 border py-1.5 pr-3 pl-1.5 rounded border-primary hover:cursor-pointer">
              <img src={previousArrow} />
              <span className="text-sm text-secondary font-medium">
                Previous
              </span>
            </div>
            <div className="flex gap-2 items-center ">
              {paginationArr.map((number, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === 2
                        ? "p-1.5 text-sm text-white leading-tight font-medium bg-sky-700 rounded hover:cursor-pointer"
                        : "p-1.5 text-sm text-secondary font-normal hover:cursor-pointer"
                    }
                  >
                    {number}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-1.5 border py-1.5 pl-3 pr-1.5 rounded border-primary hover:cursor-pointer">
              <span className="text-sm text-secondary font-medium">Next</span>
              <img src={nextArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
