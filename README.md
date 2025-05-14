- head
- body
    sidebar
- maincontainer
      buttonlist
      videocontainer
         videocard    


         import { useEffect, useState } from 'react';
import { YOU_TUBE_API } from '../utils/constants';
import SideVideoCard from './VideoCard';

const SideVideoContainer = () => {
  const [v, setV] = useState([]);

  const getVideos = async () => {
    try {
      const data = await fetch(YOU_TUBE_API);
      const json = await data.json();
      setV(json.items || []);
    } catch (err) {
      console.error("Error fetching videos", err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="p-2 flex flex-col space-y-3 w-full">
      {v.map((vs) => (
        <SideVideoCard key={vs.id} info={vs} />
      ))}
    </div>
  );
};

export default SideVideoContainer;

import { MoreVertical } from 'lucide-react';

const SideVideoCard = ({ info = {} }) => {
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle, title, thumbnails = {} } = snippet;
  const thumbnailUrl = thumbnails?.medium?.url;
  const defaultThumb = thumbnails?.default?.url;

  if (!title || !channelTitle || !thumbnailUrl) return null;

  return (
    <div className="w-72">
      <img
        src={thumbnailUrl}
        alt="video thumbnail"
        className="rounded-lg w-full h-40 object-cover"
      />
      <div className="flex mt-2 items-start space-x-3">

        <img
          src={defaultThumb}
          alt="channel icon"
          className="w-9 h-9 rounded-full"
        />

        <div className="flex-1">
          <p className="font-semibold text-sm leading-tight">{title}</p>
          <p className="text-xs text-gray-600">{channelTitle}</p>
          <p className="text-xs text-gray-500">{statistics.viewCount}</p>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-600 mt-1" />
      </div>
    </div>
  );
};

export default SideVideoCard;
