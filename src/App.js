import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateMoviePage from "./component/page/CreateMoviePage";
import PricePage from "./component/page/PricePage";
import AboutPage from "./component/page/AboutPage";
import VideosPage from "./component/page/VideosPage";
import RootLayout from "./component/layout/Root";
import TermsPage from "./component/page/TermsPage";
import VideoDetailPage from "./component/page/VideoDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <CreateMoviePage />,
      },
      {
        path: "/videos",
        element: <VideosPage />,
      },
      {
        path: "/price",
        element: <PricePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/terms",
        element: <TermsPage />,
      },
      { path: "/videoDetail/:videoId", element: <VideoDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
