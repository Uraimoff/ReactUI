import React from "react";
import { useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import SideNav from "../SideNav";
import { ComponentWr } from "./style";

const Component = () => {
  const location = useLocation();
  return (
    <>
      <ComponentWr>
        <SideNav />
        {navbar.filter((value) => {
          !value.component &&
            location.pathname === value.path &&
            (<div>{value[0].title}</div>)
        })}
      </ComponentWr>
    </>
  );
};

export default Component;
