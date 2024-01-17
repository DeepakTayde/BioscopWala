import React from "react";
import { Link } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white ">
      <div className="flex items-center gap-2 px-1 py-3">
        <BiSolidMoviePlay fontSize={50} className=" text-red-700" />
        <span className=" text-lg">BioscopWala</span>
      </div>
      <hr />
      <div className="flex-auto">Categories</div>
      <div className="flex-auto">Genre</div>
    </div>
  );
};

export default SideBar;
