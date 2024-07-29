import React from "react";
import ForSideAds from "../Generic/ForSideAds";
import SideNav from "./SideNav";
import { ChildrenWr, LayoutWr, SideNavW } from "./style";

const Component = ({ children }) => {
  return (
    <LayoutWr>
      <SideNavW>
        <SideNav />
      </SideNavW>
      <ChildrenWr>
        <ForSideAds />
        {children}
      </ChildrenWr>
    </LayoutWr>
  );
};

export default Component;
