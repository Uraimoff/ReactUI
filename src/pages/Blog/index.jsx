import React, { useContext, useEffect, useState } from "react";
import NoData from "../../components/Generic/NoData";
import BlogNews from "../../components/Generic/BlogNews";
import axios from "axios";
import LanguageContext from "../../components/Component/contexts/LanguageContext";

const Blog = () => {
  const [datas, setData] = useState(null);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/Uraimoff/ReactUI/commits');
        const commitsData = response.data.map(commit => ({
          date: commit.commit.committer.date,
          version: commit.sha,
          author: commit.author,
          commit: commit.commit.message,
          description: commit.commit.message, // If there's a description, otherwise modify accordingly
        }));
        setData(commitsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
// console.log(datas.map((dat)=>(dat.committer.login)), 'github malumotlari')
  return (
    <div className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
{datas ? (
  datas.map((dat, index) => {
    const formattedDate = new Date(dat.date).toLocaleDateString(language === 'en' ? 'en-US' : language === 'ru' ? 'ru-RU' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const formattedVersion = `v${dat.version.substring(0, 3)}`; // Shortened for a more readable version format

    const authorName = dat.author ? dat.author.login : 'Unknown';
    const authorAvatar = dat.author ? dat.author.avatar_url : 'Unknown';
    return (
      <div key={index} className="flex justify-center flex-row ">
        <BlogNews 
          date={formattedDate} 
          version={formattedVersion} 
          commit={dat.commit} 
          description={dat.description} 
          author={authorName}
          authorAvatar={authorAvatar}
        />
      </div>
    );
  })
) : (
  <NoData />
)}
  </div>
  );
};

export default Blog;
