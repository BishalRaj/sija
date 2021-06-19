import React from "react";
import Footer from "../components/footer";
import Nav from "../components/nav";

const index = () => {
  return (
    <>
      <Nav />
      <div className=" sm:mt-12 sm:pt-2 md:mt-16 md:pt-2 lg:mt-12 h-90vh bg-custom bg-cover">
        <div className="w-full  h-full flex flex-col items-center justify-center bg-black text-white bg-opacity-50">
          <div className="w-full text-center py-3 uppercase text-4xl ">
            BRINGING JOY, TO ARTISANS AND CUSTOMERS alike.
          </div>
          <div className=" w-full sm:w-3/4 text-center uppercase text-2xl py-3">
            <p className="py-4">
              your well being is of paramount importance to us.
            </p>
            <p className="py-4">
              in view of the prevalent covid-19 situation, out store shall
              remain closed until further notice.
            </p>
            <p className="py-4">
              thank you for your understanding and cooperation. <br />
              stay safe.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
