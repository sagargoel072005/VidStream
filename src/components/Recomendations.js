import { useEffect, useState } from 'react';
import { YOU_TUBE_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const SideVideoCard = ({ info = {} }) => {
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle, title, thumbnails = {}, publishedAt } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;

  if (!title || !channelTitle || !thumbnailUrl) return null;

  return (

      <div className="flex mb-4 cursor-pointer hover:bg-gray-100 p-1 rounded-lg transition-all">
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-40 h-24 rounded-lg object-cover"
        />
        <div className="ml-3 flex flex-col justify-between overflow-hidden">
          <p className="text-sm font-semibold line-clamp-2">{title}</p>
          <p className="text-xs text-gray-600">{channelTitle}</p>
          <div className="text-xs text-gray-500">
            {statistics?.viewCount
              ? `${(statistics.viewCount / 1000000).toFixed(1)}M views`
              : 'Few views'}{' '}
            • {new Date(publishedAt).toLocaleDateString()}
          </div>
        </div>
      </div>
  
  );
};

const SideVideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOU_TUBE_API);
      const json = await data.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error("Error fetching videos", err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4 w-full dark:bg-gray-900 dark:text-white transition-colors duration-300">

      {videos.map((video) => (
         <Link key={video.id} to={"/watch?v=" + video.id}>
        <SideVideoCard key={video.id?.videoId || video.id} info={video} />
          </Link>
      ))}

    </div>
  );
};

export default SideVideoContainer;
