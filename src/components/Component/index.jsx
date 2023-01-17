import React from "react";
import { useLocation } from "react-router-dom";
import ForSideAds from "../ForSideAds";
import SideNav from "../SideNav";
import { ComponentWr } from "./style";

const Component = () => {
  const location = useLocation();
  console.log(location.pathname, "location");
  return (
    <>
      <ComponentWr style={{color:"white "}}>
        <SideNav/>
    {/* <NoData/> */}
      </ComponentWr>
      <ForSideAds/>
    </>
  );
};

export default Component;
