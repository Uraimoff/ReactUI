import React, { useContext } from "react";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";

const BlogNews = ({ date, version, description, author, commit }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`relative sm:pb-12  flex flex-col items-start w-full p-6 border-l-4 ${theme === 'light' ? 'bg-white border-blue-500 text-black' : 'bg-gray-800 border-blue-400 text-white'}`}>
    <span className={`absolute left-[-9px] top-6 w-4 h-4 rounded-full ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'}`}></span>
    <p className="text-sm text-gray-400">{date}</p>
    <h3 className="text-lg font-semibold mt-2">{version}</h3>
    <p className="text-sm mt-2 text-gray-500">Commit: {commit}</p>
    <p className="text-sm mt-2">{description}</p>
    <p className="text-sm text-gray-500 mt-2">Committed by: {author}</p>
    <a href="#hi" className="text-blue-400 mt-4">Read more &rarr;</a>
  </div>
  
  );
};

export default BlogNews;
