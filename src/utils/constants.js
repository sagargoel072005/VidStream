const GOOGLE_API_KEY = "AIzaSyCHG2rZxuZ0GfeVqtVXp6i5FVOi4lpHDD8";

export const YOU_TUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" + GOOGLE_API_KEY ;


export const YOU_TUBE_SEARCH_API =   "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOU_TUBE_LIKED_VID_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=[YOUR_API_KEY]";

export const YOU_TUBE_COMMENT_API ="https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY]";
export const YOU_TUBE_WATCHED_API ="";