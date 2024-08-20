import React, { useState, useEffect } from 'react';
import './style.css';
import eye1 from './../../../assets/svg/eye/1.svg';
import eye2 from './../../../assets/svg/eye/2.svg';
import eye3 from './../../../assets/svg/eye/3.svg';
import eye4 from './../../../assets/svg/eye/4.svg';
import eye5 from './../../../assets/svg/eye/5.svg';
import eye6 from './../../../assets/svg/eye/6.svg';
import eye7 from './../../../assets/svg/eye/7.svg';
import eye8 from './../../../assets/svg/eye/8.svg';
import eye9 from './../../../assets/svg/eye/9.svg';
import eye10 from './../../../assets/svg/eye/10.svg';
import eye11 from './../../../assets/svg/eye/11.svg';
import eye12 from './../../../assets/svg/eye/12.svg';
import eye13 from './../../../assets/svg/eye/13.svg';
import eye14 from './../../../assets/svg/eye/14.svg';
import eye15 from './../../../assets/svg/eye/15.svg';
import eye16 from './../../../assets/svg/eye/16.svg';
import eye17 from './../../../assets/svg/eye/17.svg';
import eye18 from './../../../assets/svg/eye/18.svg';
import focusedEye from './../../../assets/svg/eye/focused.svg';
import blinked from './../../../assets/svg/eye/blinked.svg';
import half1 from './../../../assets/svg/eye/half1.svg';
import half2 from './../../../assets/svg/eye/half2.svg';
import half3 from './../../../assets/svg/eye/half3.svg';
import half4 from './../../../assets/svg/eye/half4.svg';
import half5 from './../../../assets/svg/eye/half5.svg';
import half6 from './../../../assets/svg/eye/half6.svg';
import half7 from './../../../assets/svg/eye/half7.svg';
import half8 from './../../../assets/svg/eye/half8.svg';
import half9 from './../../../assets/svg/eye/half9.svg';
import half10 from './../../../assets/svg/eye/half10.svg';
import half11 from './../../../assets/svg/eye/half11.svg';
import half12 from './../../../assets/svg/eye/half12.svg';
import half13 from './../../../assets/svg/eye/half13.svg';
import half14 from './../../../assets/svg/eye/half14.svg';
import half15 from './../../../assets/svg/eye/half15.svg';
import half16 from './../../../assets/svg/eye/half16.svg';
import half17 from './../../../assets/svg/eye/half17.svg';
import half18 from './../../../assets/svg/eye/half18.svg';

const EyeLoginForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [focused, setFocused] = useState('');
  const [blinking, setBlinking] = useState(false);
  const [halfMode, setHalfMode] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200); // Blink duration
    }, 3000); // Blink every 3 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleFocus = (field) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused('');
  };

  const handleHalfModeToggle = () => {
      setHalfMode(!halfMode);
  };

  const getEyePosition = (length) => {
    return length > 17 ? 17 : length; // Adjusted to match the number of SVGs
  };

  const eyePosition = getEyePosition(inputValue.length);
  const halfEyePosition = getEyePosition(passwordValue.length);

  const eyeImages = [
    eye1, eye2, eye3, eye4, eye5, eye6, eye7, eye8, eye9, eye10,
    eye11, eye12, eye13, eye14, eye15, eye16, eye17, eye18,
  ];
  const halfEyeImages = [
    half1, half2, half3, half4, half5, half6, half7, half8, half9, half10,
    half11, half12, half13, half14, half15, half16, half17, half18,
  ];

  const getEyeSrc = () => {
    if (focused === 'password' || halfMode) {
      if (blinking) {
        // When blinking and password input is focused or halfMode is active
        return blinked;
      } else {
        // When not blinking, show the appropriate eye image
        return halfMode ? halfEyeImages[halfEyePosition] : blinked;
      }
    } else if (focused === 'login') {
      // When the login input is focused, show the regular eye images
      return blinking ? blinked : eyeImages[eyePosition];
    } else if (passwordValue.length > 0) {
      // If the password input is not focused but contains a value, maintain the blinked or half-mode state
      return blinking ? blinked : (halfMode ? halfEyeImages[halfEyePosition] : blinked);
    } else {
      // When nothing is focused, ensure the eye still blinks
      return blinking ? blinked : focusedEye;
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="eye-container rounded-full overflow-hidden">
        <img
          src={getEyeSrc()}
          alt="Eye"
          className={`eye-icon ${focused ? 'active' : 'focused'} ${blinking ? 'blink' : ''}`}
        />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => handleFocus('login')}
        onBlur={handleBlur}
        className="mt-5 p-2 bg-gray-700 text-white rounded-md"
        placeholder="Login"
      />
      <input
        type={halfMode ? 'text' : 'password'}
        value={passwordValue}
        onChange={handlePasswordChange}
        onFocus={() => handleFocus('password')}
        onBlur={handleBlur}
        className="mt-5 p-2 bg-gray-700 text-white rounded-md"
        placeholder="Password"
      />
      <button
        onClick={handleHalfModeToggle}
        className="mt-5 p-2 bg-blue-500 text-white rounded-md"
      >
        Toggle Half Blink Mode
      </button>
    </div>
  );
};

export default EyeLoginForm;
