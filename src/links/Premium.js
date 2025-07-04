import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from "../components/VideoCard";

const proxy = "https://thingproxy.freeboard.io/fetch/";
const YOUTUBE_PREMIUM_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&videoDefinition=high&maxResults=20&key=${GOOGLE_API_KEY}`;


const Premium = () => {
  const [videos, setVideos] = useState([]);

  const getTrendingVideos = async () => {
    try {
      const response = await fetch(proxy + YOUTUBE_PREMIUM_API);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);

  return (
    <div className="p-4 mt-20 flex flex-wrap justify-center">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default Premium;