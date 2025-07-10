import React from "react";
import MySelf_Info from "../common/myself_info";

const MySelf = () => {

  return (
    <div className="w-full h-full abt_box p-8 space-y-4">
      <p className="text-lg font-semibold text-white h-fit">My Self</p>
      <div className="font-semibold">
        <MySelf_Info />
      </div>
    </div>
  );
};

export default MySelf;