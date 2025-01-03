import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom'; // Assuming you are using react-router

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => Cookies.get('language') || 'en'); // Default language initialized from cookies
  const location = useLocation(); // Hook to get location object

  useEffect(() => {
    // Check URL for any language settings
    const searchParams = new URLSearchParams(location.search);
    const urlLanguage = searchParams.get('lang');
    if (urlLanguage && urlLanguage !== language) {
      updateLanguage(urlLanguage); // Call updateLanguage function to handle state and cookie update
    }
  }, [location, language]); 

  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    Cookies.set('language', newLanguage, { expires: 30 });
  };

  const changeLanguage = (newLanguage) => {
    updateLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
