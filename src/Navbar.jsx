import homeIcon from "./assets/NavbarIcons/home.svg";
import ordersIcon from "./assets/NavbarIcons/orders.svg";
import productsIcon from "./assets/NavbarIcons/products.svg";
import deliveryIcon from "./assets/NavbarIcons/delivery.svg";
import marketingIcon from "./assets/NavbarIcons/marketing.svg";
import analyticsIcon from "./assets/NavbarIcons/analytics.svg";
import paymentsIcon from "./assets/NavbarIcons/payments.svg";
import toolsIcon from "./assets/NavbarIcons/tools.svg";
import discountsIcon from "./assets/NavbarIcons/discounts.svg";
import audienceIcon from "./assets/NavbarIcons/audience.svg";
import appearanceIcon from "./assets/NavbarIcons/appearance.svg";
import pluginsIcon from "./assets/NavbarIcons/plugins.svg";
import arrowIcon from "./assets/NavbarIcons/downArrow.svg";
import profile from "./assets/NavbarIcons/profile.png";
import walletIcon from "./assets/NavbarIcons/wallet.svg";

const options = [
  {
    name: "Home",
    icon: homeIcon,
  },
  {
    name: "Orders",
    icon: ordersIcon,
  },
  {
    name: "Products",
    icon: productsIcon,
  },
  {
    name: "Delivery",
    icon: deliveryIcon,
  },
  {
    name: "Marketing",
    icon: marketingIcon,
  },
  {
    name: "Analytics",
    icon: analyticsIcon,
  },
  {
    name: "Payments",
    icon: paymentsIcon,
  },
  {
    name: "Tools",
    icon: toolsIcon,
  },
  {
    name: "Discounts",
    icon: discountsIcon,
  },
  {
    name: "Audience",
    icon: audienceIcon,
  },
  {
    name: "Appearance",
    icon: appearanceIcon,
  },
  {
    name: "Plugins",
    icon: pluginsIcon,
  },
];

const Navbar = () => {
  return (
    <nav className="w-56 bg-navbar-primary h-screen px-2.5 sticky top-0 py-4 flex-shrink-0 flex flex-col">
      <div className="flex px-2 gap-x-3 items-center mb-6">
        <div className="w-[39px] h-[39px]">
          <img src={profile} className="rounded object-cover w-full h-full" />
        </div>
        <div className="flex-grow">
          <div className="text-white text-[15px] font-medium">Nishyan</div>
          <div>
            <span className="underline text-[13px] font-normal opacity-80 text-white">
              Visit store
            </span>
          </div>
        </div>
        <div>
          <img src={arrowIcon} alt="down arrow" />
        </div>
      </div>
      <ul className="flex-grow">
        {options.map((option, index) => {
          return (
            <li
              key={index}
              className={
                index === 6
                  ? "bg-white bg-opacity-10 rounded text-white flex gap-x-3 px-4 py-2 items-center mb-1 "
                  : "text-white flex gap-x-3 px-4 py-2 items-center mb-1 hover:bg-white hover:bg-opacity-10 hover:rounded hover:cursor-pointer "
              }
            >
              <img src={option.icon} />

              <span
                className={
                  index === 6
                    ? "font-medium text-sm leading-tight"
                    : "opacity-80 font-medium text-sm leading-tight"
                }
              >
                {option.name}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="bg-navbar-secondary px-3 py-1.5 rounded-[4px] flex m-1 mt-4 gap-x-3 items-center ">
        <div className="bg-white bg-opacity-10 p-1.5 rounded-[4px]">
          <img src={walletIcon} alt="wallet" />
        </div>
        <div className="">
          <div className="text-white text-[13px] font-normal opacity-80 ">
            Available credits
          </div>
          <div className="text-white text-base font-medium">222.10</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
