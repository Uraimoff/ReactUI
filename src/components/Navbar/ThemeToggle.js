// src/components/Navbar/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from './../Component/contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggle;
