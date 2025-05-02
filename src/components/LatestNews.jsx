import { use, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BreakingNews from "./BreakingNews";
const newsDataFetch = fetch("/news.json").then((res) => res.json());

const LatestNews = () => {
  const data = use(newsDataFetch);

  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const breakingNews = data.filter(
      (news) => news.others.is_today_pick == true
    );
    setLatestNews(breakingNews);
  }, [data]);

  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        {latestNews.map((news) => (
          <p className="font-bold mr-5">{news.title}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
