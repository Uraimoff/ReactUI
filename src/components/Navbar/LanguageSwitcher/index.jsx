import React, { useContext, useRef, useEffect, useState } from 'react';
import LanguageContext from './../../Component/contexts/LanguageContext';
import { ThemeContext } from '../../Component/contexts/ThemeContext';
import languageDark from "./../../../assets/svg/languageDark.svg";
import languageDay from "./../../../assets/svg/languageDay.svg";
import { lang } from '../../../utils/navbar';

const LanguageSwitcher = ({ ishome, auth, scroll }) => {
  const { changeLanguage } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);

    // Update the URL with the selected language
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.history.pushState({}, '', currentUrl);
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Determine which icon to display
  const iconSrc = () => {
    if (!scroll && ishome) {
      // Home page before 100vh
      return theme === 'light' ? languageDay : languageDay;
    } else if(auth){
      // After 100vh or on other pages
      return  languageDay;
    } else {
      // After 100vh or on other pages
      return theme === 'light' ? languageDark : languageDay;
    }
  };

  return (
    <div className="z-50 relative" ref={dropdownRef}>
      <button className=" w-8 flex justify-center  sm:m-0" onClick={toggleDropdown}>
        <img
          className="block hover:opacity-60 transition-all duration-400 h-8 w-11 sm:w-8  border border-gray-500 rounded-md p-[3px] lg:p-1.5 bg-transparent"
          src={iconSrc()}
          alt="change"
        />
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
          theme==='light'? 'bg-white':'bg-[#262626]'
        } ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="py-1">
          {lang.map((value)=>(
            <button
            onClick={() => handleLanguageChange(value.code)}
            className={`block w-full text-left px-4 py-2 text-sm ${theme==='light' ? " text-gray-700 hover:bg-gray-100" : "bg-[#262626] text-white hover:bg-[#808080]"}`}
            >
            {value.language}
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
