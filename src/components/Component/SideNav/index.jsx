import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navbar } from "../../../utils/navbar";
import { ThemeContext } from "../../../components/Component/contexts/ThemeContext"; // Adjust the path as needed

const SideNav = () => {
  const { theme } = useContext(ThemeContext);

  const activeClassName =
    "text-gray-300 relative no-underline overflow-hidden rounded font-montserrat font-semibold";
  const notActiveClassName = "text-gray-400 no-underline font-montserrat";

  return (
    <>
      <div
        className={`flex flex-col w-60 pr-3 h-[calc(100vh-100px)] overflow-hidden sticky top-24 pt-7 pb-7 hover:overflow-y-scroll transition-all duration-300 ${
          theme === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {navbar.map(
          (value) =>
            value.component && (
              <NavLink
                key={value.title}
                className={({ isActive }) =>
                  isActive ? activeClassName : notActiveClassName
                }
                to={`${value.path}`}
              >
                <div
                  className={`py-2 px-5 text-decoration-none transition-all duration-200 hover:text-${
                    theme === "light" ? "lightText" : "darkText"
                  } hover:bg-dayBackground rounded`}
                >
                  {value.title}
                </div>
              </NavLink>
            )
        )}
      </div>
    </>
  );
};

export default SideNav;
