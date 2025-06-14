import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    if (!videoId) return;

    const history = JSON.parse(localStorage.getItem("watchHistory")) || [];
    const alreadyExists = history.find((item) => item.videoId === videoId);

    if (!alreadyExists) {
      const newEntry = {
        videoId,
        title: `Video ID: ${videoId}`, // Replace with actual title if you fetch it
        watchedAt: new Date().toISOString(),
      };
      const updatedHistory = [newEntry, ...history];
      localStorage.setItem("watchHistory", JSON.stringify(updatedHistory));
    }
  }, [dispatch, videoId]);

  return (
    <div className="mt-20 m-2 p-2 w-full flex flex-col xl:flex-row">
      <div className="flex-1">
        <iframe
          width="100%"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="VidStream video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentContainer />
      </div>
      <div className="w-full xl:w-1/3 mt-4 xl:mt-0">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;