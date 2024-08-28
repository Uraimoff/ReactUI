import React, { useContext } from "react";
import { ThemeContext } from "./../../Component/contexts/ThemeContext";
import LanguageContext from "../../Component/contexts/LanguageContext";

const BlogNews = ({
  date,
  version,
  description,
  author,
  authorAvatar,
  commit,
}) => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div
      className={`relative sm:pb-12  flex flex-col items-start w-full p-6 border-l-4 ${
        theme === "light"
          ? "bg-white border-blue-500 text-black"
          : "bg-gray-800 border-blue-400 text-white"
      }`}
    >
      <span
        className={`absolute left-[-9px] top-6 w-4 h-4 rounded-full ${
          theme === "light" ? "bg-blue-500" : "bg-blue-400"
        }`}
      ></span>
      <p className="text-sm text-gray-400">{date}</p>
      <h3 className="text-lg font-semibold mt-2">{version}</h3>
      <p className="text-sm mt-2 text-gray-500">{language==='en'?'Commit:':language==='ru'?'Коммит:':'Kommit:'} {commit}</p>
      <p className="text-sm mt-2">{description}</p>
      <p className="text-sm flex items-center gap-[5px] text-gray-500 mt-2">
      {language==='en'?'Committed by:':language==='ru'?'Автор коммита:':'Kommit qilgan:'} 
        <a className="flex items-center gap-[5px]" href={`https://github.com/${author}`}>
        <div  className="rounded-[50%] mb-[5px] flex justify-center items-center w-[30px] overflow-hidden	">
          <img className="w-full" src={authorAvatar} alt="" />
        </div>
        <p>{author}</p>
        </a>
      </p>
      <a href="#no-more" className="text-blue-400 mt-4">
      {language==='en'?'Read more':language==='ru'?'Читать дальше':"Ko'proq o'qish"} &rarr;
      </a>
    </div>
  );
};

export default BlogNews;
