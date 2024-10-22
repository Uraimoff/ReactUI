import React, { useContext, useState } from 'react';
import './ShadowEffectButton.css';
import { ThemeContext } from '../contexts/ThemeContext';

const Shadow = () => {
    const [shadow, setShadow] = useState({ x: 0, y: 0, spread: 10 });
    const { theme } = useContext(ThemeContext);

    // Function to update shadow position and spread
    const handleMouseMove = (e) => {
        const button = e.target.getBoundingClientRect();
        const x = e.clientX - button.left - button.width / 2;
        const y = e.clientY - button.top - button.height / 2;
        
        // Calculate the distance of the cursor from the center of the button
        const distance = Math.sqrt(x * x + y * y);
        
        // Adjust shadow spread based on the distance (larger distance = larger spread)
        const spread = Math.min(distance / 5, 100);

        setShadow({ x, y, spread });
    };

    return (
        <div className="shadow-container" onMouseMove={handleMouseMove}>
            <button 
                className="shadow-button"
                style={{
                    boxShadow: `${shadow.x / -7}px ${shadow.y / -7}px ${shadow.spread}px ${theme === 'light' ? 'rgba(67, 67, 67, 0.4)' : 'rgba(158, 84, 255, 0.478)'}`,
                }}
            >
                Hover me!
            </button>
        </div>
    );
};

export default Shadow;
