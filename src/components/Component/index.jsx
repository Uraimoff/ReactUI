import React from "react";
import { useLocation } from "react-router-dom";
import ForSideAds from "../ForSideAds";
import SideNav from "../SideNav";
import { BigWr, ComponentWr } from "./style";
import NoData from "../NoData";

const Component = () => {
  const location = useLocation();
  console.log(location.pathname, "location");
  return (
    <>
      <BigWr>
        <ComponentWr style={{ color: "white " }}>
          <SideNav />
          <NoData/>
        </ComponentWr>
        <ForSideAds />
      </BigWr>
    </>
  );
};

export default Component;
