import React from "react";
import ContentTitle from "./contentTitle";

const Impact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-3 ">
      <ContentTitle title="sija impact" />
      <div className="h-110 w-full flex flex-row-reverse bg-custom bg-cover bg-fixed text-gray-300">
        <div className="w-full md:w-1/2  h-full flex flex-col items-center justify-center bg-black bg-opacity-10">
          <div className="w-full text-center py-3 uppercase text-xl ">
            BRINGING JOY, TO ARTISANS AND CUSTOMERS alike.
          </div>
          <div className="flex flex-row w-full sm:w-1/2 text-center py-3">
            <div className="flex-1">
              <div className="text-2xl py-4 font-bold">1000+</div>
              <div className="uppercase font-light tracking-widest text-sm ">
                people <br /> employed
              </div>
            </div>
            <div className="flex-1">
              <div className="text-2xl py-4 font-bold">2000+</div>
              <div className="uppercase font-light tracking-widest text-sm ">
                ARTISANS <br /> EMPOWERED
              </div>
            </div>
            <div className="flex-1">
              <div className="text-2xl py-4 font-bold">150,000+</div>
              <div className="uppercase font-light tracking-widest text-sm ">
                HAPPY <br /> CUSTOMERS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
