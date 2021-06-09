import { getFontDefinitionFromManifest } from "next/dist/next-server/server/font-utils";
import React from "react";

const Footer = () => {
  let date = new Date();

  return (
    <footer className="bg-red-50 tracking-wide mt-10">
      <div className="container px-2 sm:px-1 md:px-40 flex flex-wrap mx-auto text-gray-700">
        <div className="flex-1 px-2">
          <h6 className="py-4 uppercase text-sm font-bold min-w-max text-black">
            discover fashion store
          </h6>
          <ul className="text-xs">
            <a href="#">
              <li className="py-2 hover:text-black">About Us</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Newsletter</li>
            </a>

            <a href="#">
              <li className="py-2 hover:text-black">Our Exhibitions</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Blog</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Media</li>
            </a>
          </ul>
        </div>

        <div className="flex-1 px-2">
          <h6 className="py-4 uppercase text-sm font-bold min-w-max  text-black">
            LET US HELP YOU
          </h6>
          <ul className="text-xs">
            <a href="#">
              <li className="py-2 hover:text-black">
                Shipping & Delivery Policy
              </li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Refund/Exchange Policy</li>
            </a>

            <a href="#">
              <li className="py-2 hover:text-black">Terms & Conditions</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Privacy Policy</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Cookies Policy</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">FAQ's</li>
            </a>
          </ul>
        </div>

        <div className="flex-1 px-2">
          <h6 className="py-4 uppercase text-sm font-bold min-w-max text-black">
            follow us
          </h6>
          <ul className="text-xs">
            <a href="#">
              <li className="py-2 hover:text-black">About Us</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Newsletter</li>
            </a>

            <a href="#">
              <li className="py-2 hover:text-black">Our Exhibitions</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Blog</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Media</li>
            </a>
          </ul>
        </div>

        <div className="flex-1 px-2">
          <h6 className="py-4 uppercase text-sm font-bold min-w-max  text-black">
            get in touch
          </h6>
          <ul className="text-xs">
            <a href="#">
              <li className="py-2 hover:text-black">
                Shipping & Delivery Policy
              </li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Refund/Exchange Policy</li>
            </a>

            <a href="#">
              <li className="py-2 hover:text-black">Terms & Conditions</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Privacy Policy</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">Cookies Policy</li>
            </a>
            <a href="#">
              <li className="py-2 hover:text-black">FAQ's</li>
            </a>
          </ul>
        </div>
      </div>
      <p className=" text-center text-sm py-2 tracking-widest">
        &#169; {date.getFullYear()}. Developed by Bishal Raj Shakya.
      </p>
    </footer>
  );
};

export default Footer;
