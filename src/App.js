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
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
