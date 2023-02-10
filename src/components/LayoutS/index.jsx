import React from "react";
import ForSideAds from "../ForSideAds";
import SideNav from "../SideNav";
import {
  ChildrenWr,
  LayoutWr,
  SideNavW,
} from "./style";

const LaoyoutS = ({ children }) => {
  return (
    <LayoutWr>
      <SideNavW>
        <SideNav />
      </SideNavW>
      <ChildrenWr>
      <ForSideAds/>
        {children}</ChildrenWr>
    </LayoutWr>
  );
};

export default LaoyoutS;
