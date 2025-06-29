import { useEffect, useState } from 'react';
import { YOU_TUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
      try {
    const data = await fetch(YOU_TUBE_API);
    const json = await data.json();
    if (!json?.items || !Array.isArray(json.items)) {
      console.error("Invalid API response:", json);
      setVideos([]); // prevent crash
      return;
    }

    setVideos(json.items);
     } catch (error) {
    console.error("Failed to fetch videos:", error);
    setVideos([]); // fallback to empty array
  }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>Looks like you're offline !! Please check your internet connection</h1>
    );


  return (

   <div className='m-5 flex flex-wrap justify-around'>
  {videos.length > 0 ? (
    videos.map((video) => (
      <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCard info={video} />
      </Link>
    ))
  ) : (
    <Shimmer />
  )}
</div>

  );
};

export default VideoContainer;