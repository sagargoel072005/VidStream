import { MoreVertical } from 'lucide-react';

const VideoCard = ({ info = {} }) => {
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

export default VideoCard;
