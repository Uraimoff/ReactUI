import React, { useContext } from "react";
import { ThemeContext } from "./../../Component/contexts/ThemeContext"; // Adjust the path as needed

const ForSideAds = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="w-60 box-border absolute right-10  flex-col gap-5 hidden xl:flex">
        <div
          className={`rounded-lg border box-border p-1.5 ${
            theme === "light" ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-800"
          }`}
        >
          <div
            className={`font-extrabold text-2xl overflow-hidden relative ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            𝕊𝕦𝕡𝕡𝕠𝕣𝕥 𝕌𝕫𝕓𝕖𝕜 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣𝕤
            <div>
              <div className="h-2.5 bg-[#009AB6]"></div>
              <div className="h-2.5 bg-white"></div>
              <div className="h-2.5 bg-green-500"></div>
            </div>
          </div>
        </div>
        <div
          className={`rounded-lg border box-border p-1.5 ${
            theme === "light" ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-800"
          }`}
        >
          🚀 Join the React UI team!
          <div
            className={`p-2.5 text-sm ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            We're looking for React Engineers and other amazing roles－come find
            out more!
          </div>
        </div>
      </div>
    </>
  );
};

export default ForSideAds;
