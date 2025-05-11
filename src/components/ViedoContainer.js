import React, { useEffect, useState } from 'react'
import { YOU_TUBE_API } from '../utils/constants';

const ViedoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOU_TUBE_API);
    const json = await data.json();
    console.log("API RESPONSE :", json);
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>ViedoContainer</div>
  )
}

export default ViedoContainer;