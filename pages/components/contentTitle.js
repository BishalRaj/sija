import React from "react";

const ContentTitle = (props) => {
  return (
    <div className=" p-3 uppercase text-lg ">
      <p>{props.title}</p>
      <span className="flex flex-row mx-auto items-center justify-center bg-black opacity-50 w-1/3  px-0.5 py-px my-4"></span>
    </div>
  );
};

export default ContentTitle;
