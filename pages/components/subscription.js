import React from "react";
import ContentTitle from "./contentTitle";

const Subscription = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center py-3 px-2 sm:px-0">
      <ContentTitle title="stay up to date" />

      {/* form */}
      <form action="#" className="w-full max-w-md">
        <div className="flex items-center py-2 shadow-md hover:shadow-lg">
          <input
            className="text-sm appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <button className="text-sm mr-2 text-yellow-700 active:bg-transparent focus:border-transparent ">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscription;
