import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query"); // renamed to avoid conflict
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&safeSearch=none&order=relevance&q=${encodeURIComponent(searchQuery)}&key=${GOOGLE_API_KEY}`
      );
      const data = await res.json();
      setVideos(data.items);
    };
    if (searchQuery) fetchResults();
  }, [searchQuery]);

  return (
    <div className="mt-20 px-6">
      <h2 className="text-xl font-semibold mb-4">Results for: {searchQuery}</h2>
      <div className="m-4 flex flex-wrap justify-around">
        {videos.map((video) => (
              <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard key={video.id.videoId} info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
