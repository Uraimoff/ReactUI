import React from "react";
import { useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import SideNav from "../SideNav";
import { ComponentWr } from "./style";

const Component = () => {
  const location = useLocation();
  console.log(
    navbar.filter(
      (value) => !value.component && location.pathname === value.path(value.title)
      
    ), "bu natika filter"
  );
  console.error(navbar.filter(
    (value) => !value.component && location.pathname === value.path,
    "bu natika filter"
  ), "bu error")
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
