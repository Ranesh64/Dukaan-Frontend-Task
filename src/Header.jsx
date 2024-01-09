import helpIcon from "./assets/HeaderIcons/help.svg";
import searchIcon from "./assets/HeaderIcons/search.svg";
import announcementIcon from "./assets/HeaderIcons/group.svg";
import menuIcon from "./assets/HeaderIcons/menu.svg";

const SearchBar = () => {
  return (
    <div className="bg-secondary px-4 py-2 w-[400px] rounded-md">
      <div className="flex items-center gap-x-2">
        <div>
          <img src={searchIcon} alt="search" />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search features, tutorials, etc."
            className="w-full outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="px-8 py-3 h-16 flex bg-white border-b border-primary items-center gap-x-4 sticky top-0 z-30">
      <div className="flex gap-x-4 flex-grow">
        <div className="text-[15px] font-normal text-primary">Payments</div>
        <div className="flex gap-x-[6px] items-center">
          <img src={helpIcon} />
          <span className="text-xs text-secondary text-nowrap">
            How it works?
          </span>
        </div>
      </div>
      <SearchBar />
      <div className="flex gap-x-4 flex-grow justify-end">
        <div className="bg-neutral-200 rounded-full p-[10px]">
          <img src={announcementIcon} />
        </div>
        <div>
          <img src={menuIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
