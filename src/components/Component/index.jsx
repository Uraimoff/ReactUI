import React from "react";
import ForSideAds from "../Generic/ForSideAds";
import SideNav from "./SideNav";

const Component = ({ children }) => {
  return (
    <div className="flex gap-12">
      <div className="relative">
        <SideNav />
      </div>
      <div className="flex-1 h-[calc(100vh-60px)] overflow-y-auto bg-black">
        <ForSideAds />
        {children}
      </div>
    </div>
  );
};

export default Component;
