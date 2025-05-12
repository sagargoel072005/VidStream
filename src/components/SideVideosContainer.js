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
