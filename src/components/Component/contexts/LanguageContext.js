import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // default language

  useEffect(() => {
    const savedLanguage = Cookies.get('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    Cookies.set('language', newLanguage, { expires: 30 }); // saves language for 30 days
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
