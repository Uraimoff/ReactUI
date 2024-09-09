// src/components/Navbar/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../Component/contexts/ThemeContext';
import lightSun from "./../../../assets/svg/lightSun.svg";
// import darkSun from "./../../assets/svg/darkSun.svg";
import lightMoon from "./../../../assets/svg/lightMoon.svg";
import darkMoon from "./../../../assets/svg/darkMoon.svg";

const ThemeToggle = ({ishome, auth, scroll}) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    // Determine which icon to display
    const iconSrc = () => {
        if (!scroll && ishome) {
            // Home page before 100vh
            return theme === 'light' ? lightMoon : lightSun;
        } else if(auth) 
            {
            // After 100vh or on other pages
            return theme === 'light' ? lightMoon : lightSun;
        }
            else{
            // After 100vh or on other pages
            return theme === 'light' ? darkMoon : lightSun;
        }
    };
    return (
        <button title='theme toggle' className='block w-8 h-8 hover:opacity-60 transition-all duration-400 ' onClick={toggleTheme}>
           <img className='block h-full w-11   border   border-gray-500 rounded-md p-[3px] lg:p-1.5 bg-transparent' src={iconSrc()} alt='change'/> 
        </button>
    );
};

export default ThemeToggle;
