import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  return (
    <>
      <div className="mt-20 m-2 p-2 w-full flex">
        <div>
          <iframe
            width="1000"
            height="550"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="VidStream video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
          <CommentContainer />
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

    </>
  )
}

export default WatchPage;   