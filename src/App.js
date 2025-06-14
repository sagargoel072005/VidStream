import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import WatchHistory from './components/WatchHistory';
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import ResultsPage from './components/ResultsPage';
import YouTubeShorts from "./components/YouTubeShorts";
import Trending from "./links/Trending";
import Shopping from "./links/Shopping";
import Music from "./links/Music";
import Movies from "./links/Movies";
import Live from "./links/Live";
import Gaming from "./links/Gaming";
import News from "./links/News";
import Sports from "./links/Sports";
import Fashion from "./links/Fashion";
import Podcast from "./links/Podcast";
import Premium from "./links/Premium";
import Studio from "./links/Studio";
import Kids from "./links/Kids";

const appRouter = createBrowserRouter([{
  path: "/",
  element: (
    <>
      <Head />
      <Body />
    </>
  ),
  children: [
    {
      path: "/",
      element: <Maincontainer />
    }, {
      path: "/watch",
      element: <WatchPage />
    }, {
      path: "/results",
      element: <ResultsPage />
    }, {
      path: "/shorts",
      element: <YouTubeShorts />

    }, {
      path: "/history",
      element: <WatchHistory />
    },
     {
      path: "/trending",
      element: <Trending />
    },{
      path: "/shopping",
      element: <Shopping />
    },{
      path: "/music",
      element: <Music />
    },{
      path: "/movies",
      element: <Movies />
    },{
      path: "/live",
      element: <Live />
    },{
      path: "/gaming",
      element: <Gaming />
    },{
      path: "/news",
      element: <News />
    },{
      path: "/sports",
      element: <Sports />
    },{
      path: "/fashion",
      element: <Fashion />
    },{
      path: "/podcast",
      element: <Podcast />
    },{
      path: "/vidStreampremium",
      element: <Premium />
    },{
      path: "/vidStreammusic",
      element: <Music />
    },{
      path: "/vidStreamstudio",
      element: <Studio />
    },{
      path: "/vidStreamkids",
      element: <Kids />
    },
  ]

}])

function App() {

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;