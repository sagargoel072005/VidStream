export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOU_TUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOU_TUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

