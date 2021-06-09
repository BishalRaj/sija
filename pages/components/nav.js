import React from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Nav = () => {
  // css classes
  let iconClass =
    "h-5 w-7 mx-auto my-2 sm:my-0  text-gray-500 hover:text-gray-900 flex-row sm:flex-col sm:mx-auto md:mx-3 md:flex-row md:h-7 md:w-7";
  let listMobile = "flex-1  p-4  min-w-full text-gray-600 hover:text-black";
  let listDesktop = "flex-1  p-4 sm:p-1 md:p-4 text-gray-600 hover:text-black";

  return (
    <nav className="static w-full shadow-md bg-white flex flex-wrap px-10 py-5 text-sm sm:fixed sm:z-10 sm:top-0 sm:px-2 sm:py-0">
      {/* Logo */}
      <div className="items-center justify-center sm:justify-start flex sm:flex-1 sm:min-w-0  min-w-full">
        <img
          src="http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png"
          alt=""
          className="py-2 ml-5 w-8"
        />
      </div>

      {/* Hidden in mobile view */}
      <div className="uppercase flex-auto min-w-min  flex-grow hidden sm:block sm:flex-auto md:flex-grow">
        <ul className=" flex flex-wrap text-center items-center cursor-pointer">
          <li className={`${listDesktop}`}>new arrivals</li>
          <li className={`${listDesktop}`}>women</li>
          <li className={`${listDesktop}`}>men</li>
          <li className={`${listDesktop}`}>accessories</li>
          <li className={`${listDesktop}`}>sale</li>
          <li className={`${listDesktop}`}>our store</li>
        </ul>
      </div>

      {/* Visible in mobile view */}
      <div className="uppercase flex-1 bg-gray-100 block sm:hidden">
        <ul className=" flex flex-wrap text-center cursor-pointer">
          <li className={`${listMobile}`}>new arrivals</li>
          <li className={`${listMobile}`}>women</li>
          <li className={`${listMobile}`}>men</li>
          <li className={`${listMobile}`}>accessories</li>
          <li className={`${listMobile}`}>sale</li>
          <li className={`${listMobile}`}>our store</li>
        </ul>
      </div>

      {/* Icons */}
      <div className="min-w-full flex items-center justify-center w-max bg-gray-100 sm:bg-white sm:justify-end sm:flex-1 md:flex-1 sm:min-w-0">
        <div className="flex" />
        <SearchIcon className={`${iconClass}`} />
        <UserIcon className={`${iconClass}`} />
        <ShoppingBagIcon className={`${iconClass}`} />
      </div>
    </nav>
  );
};

export default Nav;
