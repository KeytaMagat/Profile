import React from "react";
import Info from "../common/info";

const MySelf = () => {

  return (
    <div className="flex-1 abt_bg rounded-lg">
      <p className="text-lg font-semibold text-white h-fit p-2 pl-3">My Self</p>
      <div className="p-8 font-semibold">
        <Info />
      </div>
    </div>
  );
};  

export default MySelf;