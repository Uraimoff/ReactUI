import React from "react";
import ForSideAds from "../ForSideAds";
import SideNav from "../SideNav";
// import uzFlag from "./../../assets/img/uzbFlag.png";
import {
  // AdsContainer,
  // AdsWrapper,
  ChildrenWr,
  // Div,
  // FlagWr,
  // Img,
  LayoutWr,
  // P,
  SideNavW,
  // SpaN,
  // SpAN,
  // Span,
  // Supportment,
} from "./style";

const LaoyoutS = ({ children }) => {
  return (
    <LayoutWr>
      <SideNavW>
        <SideNav />
      </SideNavW>
      <ChildrenWr>{children}</ChildrenWr>
      <ForSideAds/>
    </LayoutWr>
  );
};

export default LaoyoutS;
