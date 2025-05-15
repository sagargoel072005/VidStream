import { useEffect, useState } from 'react';
import { YOU_TUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import useOnlineStatus from '../hooks/useOnlineStatus';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOU_TUBE_API);
    const json = await data.json();
    console.log("API RESPONSE :", json);
    setVideos(json.items);
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
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;