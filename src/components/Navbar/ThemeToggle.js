// src/components/Navbar/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from './../Component/contexts/ThemeContext';
import lightSun from "./../../assets/svg/lightSun.svg";
// import darkSun from "./../../assets/svg/darkSun.svg";
import lightMoon from "./../../assets/svg/lightMoon.svg";
import darkMoon from "./../../assets/svg/darkMoon.svg";

const ThemeToggle = ({ishome, scroll}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // Determine which icon to display
    const iconSrc = () => {
        if (!scroll && ishome) {
            // Home page before 100vh
            return theme === 'light' ? lightSun : lightMoon;
        } else {
            // After 100vh or on other pages
            return theme === 'light' ? darkMoon : lightSun;
        }
    };
    return (
        <button onClick={toggleTheme}>
           <img className='block h-8 w-8 ml-2 border border-gray-500 rounded-md p-[3px] lg:p-1.5 bg-transparent' src={iconSrc()} alt='change'/> 
        </button>
    );
};

export default ThemeToggle;
