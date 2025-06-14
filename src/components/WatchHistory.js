import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchHistory = () => {
  const [videoDetails, setVideoDetails] = useState([]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const storedHistory = JSON.parse(localStorage.getItem("watchHistory")) || [];

      const videoIds = storedHistory.map(item => item.videoId).join(",");
      if (!videoIds) return;

      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${GOOGLE_API_KEY}`
        );
        const data = await res.json();

        if (data.items) {
          setVideoDetails(data.items);
        }
      } catch (error) {
        console.error("Failed to fetch video details:", error);
      }
    };

    fetchVideoDetails();
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("watchHistory");
    setVideoDetails([]);
  };

  return (
    <div className="p-6 mt-20 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Watch History</h1>

      {videoDetails.length > 0 && (
        <button
          onClick={clearHistory}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Clear History
        </button>
      )}

      {videoDetails.length === 0 ? (
        <p>No videos watched yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {videoDetails.map((item) => (
            <Link key={item.id} to={`/watch?v=${item.id}`}>
              <VideoCard info={item} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchHistory;
