export const ButtonComponent=`
<button>Hello</button>
`

export const obj = [
    {
      name: "Ibrohim",
      token: "Ibrohimasdvdffghkfdffdsll112"
    },
    {
      name: "Admin",
      token: "Adminasdvdffghkfdffdsll112"
    },
  ];

export const button = [
  {
    id: 1,
    title: 'Type',
    content: (
<div className="p-4 rounded-md flex-wrap flex gap-2">
  {/* Primary Button */}
  <button
    className="!bg-blue-500 text-white py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Primary Button
  </button>

  {/* Default Button */}
  <button
    className="border border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Default Button
  </button>

  {/* Dashed Button */}
  <button
    className="border border-dashed border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Dashed Button
  </button>

  {/* Text Button */}
  <button
    className="bg-transparent  py-1.5 px-3 text-sm transition hover:opacity-75 active:opacity-60"
  >
    Text Button
  </button>

  {/* Link Button */}
  <a
    href="#hi"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-1.5 px-3 text-sm transition"
  >
    Link Button
  </a>
</div>

    ),
    component: `
 <div className="p-4 rounded-md flex-wrap flex gap-2">
  {/* Primary Button */}
  <button
    className="!bg-blue-500 text-white py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Primary Button
  </button>

  {/* Default Button */}
  <button
    className="border border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Default Button
  </button>

  {/* Dashed Button */}
  <button
    className="border border-dashed border-gray-300 py-1.5 px-3 text-sm rounded-md transition hover:opacity-75 active:opacity-60"
  >
    Dashed Button
  </button>

  {/* Text Button */}
  <button
    className="bg-transparent  py-1.5 px-3 text-sm transition hover:opacity-75 active:opacity-60"
  >
    Text Button
  </button>

  {/* Link Button */}
  <a
    href="#hi"
    className="text-blue-500 hover:opacity-75 active:opacity-60 py-1.5 px-3 text-sm transition"
  >
    Link Button
  </a>
</div>
`,
    description: 'There are five type of buttons in DocUI, namely they are: primary buttons, default buttons, dashed buttons, text buttons, and link buttons.'
  },
  {
    id: 1,
    title: 'Buttons',
    content: (
      <div class="p-4 rounded-md flex-wrap flex gap-2">
      {/* <!-- Small Square Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Small Circle Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Medium Circle Button --> */}
      <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Button with Text --> */}
      <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          download
      </button>
  </div>
    ),
    component: `
    <div class="p-4 rounded-md flex-wrap flex gap-2">
        <!-- Small Square Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Small Circle Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Medium Circle Button -->
        <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Button with Text -->
        <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            download
        </button>
    </div>
`,
    description: 'this is button'
  },
  {
    id: 1,
    title: 'Buttons',
    content: (
      <div class="p-4 rounded-md flex-wrap flex gap-2">
      {/* <!-- Small Square Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Small Circle Button --> */}
      <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Medium Circle Button --> */}
      <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
      </button>

      {/* <!-- Button with Text --> */}
      <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
          </svg>
          download
      </button>
  </div>
    ),
    component: `
    <div class="p-4 rounded-md flex-wrap flex gap-2">
        <!-- Small Square Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-md transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Small Circle Button -->
        <button class="bg-blue-500 text-white p-2 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Medium Circle Button -->
        <button class="bg-blue-500 text-white p-3 text-sm rounded-full transition hover:opacity-75 active:opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
        </button>

        <!-- Button with Text -->
        <button class="bg-blue-500 text-white py-2 px-4 text-sm rounded-full transition hover:opacity-75 active:opacity-60 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            download
        </button>
    </div>
`,
    description: 'this is button'
  },
]
  export const Login =[
    {
      id: 1,
      title: 'Login component for professionals',
      content: 'something',
      component: `
      import React, { useState, useEffect, useContext } from 'react';
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
import darkEye from './../../../assets/svg/darkEye.svg';
import whiteEye from './../../../assets/svg/whiteEye.svg';
import darkEyeSlash from './../../../assets/svg/darkEye-slash.svg';
import whiteEyeSlash from './../../../assets/svg/whiteEye-slash.svg';
import { ThemeContext } from '../contexts/ThemeContext';
const EyeLoginForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [focused, setFocused] = useState('');
  const [blinking, setBlinking] = useState(false);
  const [halfMode, setHalfMode] = useState(false);
  const { theme } = useContext(ThemeContext);

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
  
  
const PasswordShow = ()=>{
  if( theme ==='light'){
    return halfMode ?  darkEyeSlash:darkEye 
  } else { 
    return halfMode ?  whiteEyeSlash:whiteEye 
  }
}
  return (
    <>
    <div className={'flex flex-col items-center justify-center min-h-screen '$'{theme === "light" ? "bg-defaultLightBg text-black" : "bg-defaultDarkBg text-defaultLightBg"}'}>
    <div className="eye-container rounded-full overflow-hidden">
      <img
        src={getEyeSrc()}
        alt="Eye"
        className={'eye-icon '$'{focused ? 'active' : 'focused'} "$"{blinking ? 'blink' : ''}'}
      />
    </div>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onFocus={() => handleFocus('login')}
      onBlur={handleBlur}
      className={'mt-5 p-2 "$"{theme === "light" ? "bg-secondaryLightBg text-black" : "bg-secondaryDarkBg text-white"} rounded-md'}
      placeholder="Login"
      />
    <div className='relative'>
    <input
      type={halfMode ? 'text' : 'password'}
      value={passwordValue}
      onChange={handlePasswordChange}
      onFocus={() => handleFocus('password')}
      onBlur={handleBlur}
      className={'mt-5 w-full p-2 "$"{theme === "light" ? "bg-secondaryLightBg text-black" : "bg-secondaryDarkBg text-white"} rounded-md'}
      placeholder="Password"
      />
    <img
    alt='eye'
    src={PasswordShow()}
    onClick={handleHalfModeToggle}
    className={' w-[35px]  "$"{theme === "light" ? "bg-secondaryLightBg " : "bg-secondaryDarkBg "} px-[5px] absolute top-[27px] right-[5px] pointer arounded-md'}
    />
    </div>
  </div>
    </>
  );
};

export default EyeLoginForm;

      `,
      description: 'Login component where eye watches while you are filling login Input',
    },

  ]

 export  const buttonApi={en: [
  {
    property: 'autoInsertSpace',
    description: 'We add a space between two Chinese characters by default, which can be removed by setting `autoInsertSpace` to `false`.',
    type: 'boolean',
    default: 'true',
    version: '5.17.0',
  },
  {
    property: 'block',
    description: 'Option to fit button width to its parent width.',
    type: 'boolean',
    default: 'false',
  },
  // More properties...
],
ru: [
  {
    property: 'autoInsertSpace',
    description: 'Мы добавляем пробел между двумя китайскими символами по умолчанию, который можно удалить, установив значение `autoInsertSpace` в `false`.',
    type: 'boolean',
    default: 'true',
    version: '5.17.0',
  },
  {
    property: 'block',
    description: 'Опция подогнать ширину кнопки под ширину родителя.',
    type: 'boolean',
    default: 'false',
  },
  // More properties...
],
uz: [
  {
    property: 'autoInsertSpace',
    description: 'Biz odatda ikkita xitoy belgilari orasiga bo‘shliq qo‘shamiz, bu bo‘shliqni `autoInsertSpace` ni `false` qilib o‘rnatish orqali olib tashlash mumkin.',
    type: 'boolean',
    default: 'true',
    version: '5.17.0',
  },
  {
    property: 'block',
    description: 'Tugma kengligini uning ota-ona kengligiga moslashtirish opsiyasi.',
    type: 'boolean',
    default: 'false',
  },
]
}