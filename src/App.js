import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import ResultsPage from './components/ResultsPage';
import YouTubeShorts from "./components/YouTubeShorts";
import useDarkMode from "./hooks/useDarkMode";

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
    }
  ]

}])

function App() {
  const [isDark] = useDarkMode(); // ✅ to keep mode persistent

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;