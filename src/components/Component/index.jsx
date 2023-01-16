import React from "react";
import { useLocation } from "react-router-dom";
import NoData from "../NoData";
import SideNav from "../SideNav";
import { ComponentWr } from "./style";

const Component = () => {
  const location = useLocation();
  console.log(location.pathname, "location");
  return (
    <>
      <ComponentWr style={{color:"white "}}>
        <SideNav/>
    <NoData/>
      </ComponentWr>
    </>
  );
};

export default Component;
