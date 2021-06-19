import React, { useState } from "react";
import Link from "next/link";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { NavItem } from "./navItems";

const index = () => {
  // toggle

  const [toggle, settoggle] = useState(false);
  const logo = "/logo.png";
  // css classes
  let iconClass =
    "h-5 w-7 mx-auto my-2 sm:my-0  text-gray-500 hover:text-gray-900 flex-row sm:flex-col sm:mx-auto md:mx-3 md:flex-row md:h-7 md:w-7";
  let listMobile = "flex-1  p-4  min-w-full text-gray-600 hover:text-black";
  let listDesktop = "flex-1  p-4 sm:p-1 md:p-4 text-gray-600 hover:text-black";

  return (
    <nav className="static w-full shadow-md bg-white flex flex-wrap px-10  text-sm  sm:fixed sm:z-10 sm:top-0 sm:px-2 ">
      {/* Logo */}
      <div className="items-center justify-center sm:justify-start flex sm:flex-1 sm:min-w-0  min-w-full">
        <Link href="/">
          <a>
            <img
              src={
                logo
                  ? logo
                  : "http://pngimg.com/uploads/lamborghini/lamborghini_PNG10709.png"
              }
              alt=""
              className="py-2 ml-5 w-20"
            />
          </a>
        </Link>
        <div className="relative -right-28  h-10 w-14 block sm:hidden ">
          {toggle ? (
            <XIcon
              className="h-full w-full"
              onClick={() => settoggle(!toggle)}
            />
          ) : (
            <MenuIcon
              className="h-full w-full"
              onClick={() => settoggle(!toggle)}
            />
          )}
        </div>
      </div>

      {/* Hidden in mobile view */}
      <div className="uppercase flex-auto min-w-min  my-auto flex-grow hidden sm:block sm:flex-auto md:flex-grow">
        <ul className=" flex flex-wrap text-center items-center cursor-pointer">
          {React.Children.toArray(
            NavItem.map((item) => {
              return (
                <Link href={item.link}>
                  <a className={`${listDesktop}`}>
                    <li>{item.title}</li>
                  </a>
                </Link>
              );
            })
          )}
        </ul>
      </div>

      {/* Visible in mobile view */}
      {toggle && (
        <div className="uppercase  flex-1 bg-gray-100 block sm:hidden transition ease-in duration-1000">
          <ul className=" flex flex-wrap text-center items-center cursor-pointer">
            {React.Children.toArray(
              NavItem.map((item) => {
                return (
                  <Link href={item.link}>
                    <a className={`${listMobile}`}>
                      <li>our store</li>
                    </a>
                  </Link>
                );
              })
            )}
          </ul>
        </div>
      )}

      {/* Icons */}
      <div
        className={` ${
          toggle ? "block" : "hidden"
        }  min-w-full flex items-center justify-center w-max bg-gray-100 mb-5 sm:mb-0 sm:bg-white sm:justify-end sm:flex-1 md:flex-1 sm:min-w-0 sm:inline-flex`}
      >
        <div className="flex" />
        <SearchIcon className={`${iconClass}`} />
        <UserIcon className={`${iconClass}`} />
        <ShoppingBagIcon className={`${iconClass}`} />
      </div>
    </nav>
  );
};

export default index;
