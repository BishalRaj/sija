import React from "react";

const CraftsImage = (props) => {
  return (
    <a
      href="#"
      className="flex-none sm:flex-1 sm:relative py-2 px-3  w-full sm:w-1/3 sm:py-0 md:py-2 text-center"
    >
      <div className="h-80 sm:h-auto md:h-96 lg:h-110 overflow-hidden flex items-center justify-center">
        <img
          src={props.image}
          alt={props.name}
          className="h-full sm:h-56 md:h-full object-cover sm:object-fill md:object-cover "
        />
      </div>
      <div className="w-full sm:w-3/4 sm:bottom-0.5 sm:absolute   md:w-full  md:static overflow-hidden">
        <p className=" uppercase tracking-widest text-md py-2 text-black sm:text-white md:text-black  sm:bg-yellow-700 sm:bg-opacity-50   md:bg-transparent w-full">
          {props.name}
        </p>
      </div>
    </a>
  );
};

export default CraftsImage;
