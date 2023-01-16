import React from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { SideNavItem, SideNavWr, Link } from "./style";

const SideNav = () => {
  const Active = {
    color: "#e3e3e3",
    background: "white",
    width: "200px",
    textDecoration: "none",
    fontFamily: 'Montserrat',
    fontWeight: "600"
  };
  const NotActive={
    color: "#B2BAC2",
    textDecoration: "none",
    fontFamily: 'Montserrat'
  }

  return (
    <>
      <SideNavWr>
        {navbar.map(
          (value) =>
            value.component && (
              <NavLink
              style={({ isActive }) =>
              isActive ? Active : NotActive
            }
                to={`${value.path}`}
              >
                <SideNavItem>{value.title}</SideNavItem>
              </NavLink>
            )
        )}
      </SideNavWr>
    </>
  );
};

export default SideNav;
