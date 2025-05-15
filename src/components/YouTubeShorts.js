import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from '../utils/constants';
import { ThumbsUp, ThumbsDown, MessageCircle, Link as LinkIcon } from 'lucide-react';

const YouTubeShorts = () => {
  const [shorts, setShorts] = useState([]);
  const query = "#shorts";

  useEffect(() => {
    const fetchAllShorts = async () => {
      try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
            query
          )}&type=video&videoDuration=short&key=${GOOGLE_API_KEY}`
        );
        const data = await res.json();
        setShorts(data.items);
      } catch (err) {
        console.error("Error fetching shorts:", err);
      }
    };

    fetchAllShorts();
  }, []);

  return (
<div className="mt-20 w-full h-[640px] overflow-y-scroll snap-y snap-mandatory shadow-lg">
  {shorts.map((video) => (
    <div
      key={video.id.videoId}
      className="m-2 w-full h-[640px] flex items-center justify-center snap-start relative"
    >
      <div className="relative bg-black w-[360px] h-[640px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.id.videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay content */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
          <p className="text-sm font-semibold truncate">{video.snippet.title}</p>
          <p className="text-xs text-gray-300">
            @{video.snippet.channelTitle.split(' ').slice(0, 7).join(' ')}
            {video.snippet.channelTitle.split(' ').length > 7 ? '...' : ''}
          </p>
        </div>

        {/* Right-side Icons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 items-center text-white">
          <button className="text-xl hover:scale-110 transition-transform">
            <ThumbsUp />
          </button>
          <button className="text-xl hover:scale-110 transition-transform">
            <ThumbsDown />
          </button>
          <button className="text-xl hover:scale-110 transition-transform">
            <MessageCircle />
          </button>
          <button className="text-xl hover:scale-110 transition-transform">
            <LinkIcon />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default YouTubeShorts;
