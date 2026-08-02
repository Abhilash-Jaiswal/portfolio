import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MyStoryPage } from "./pages/MyStoryPage.jsx";
import { KukCleanPage } from "./pages/KukCleanPage.jsx";
import { NotPausedPage } from "./pages/NotPausedPage.jsx";
import { InfluencerPage } from "./pages/InfluencerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "my-story", element: <MyStoryPage /> },
      { path: "life-story", element: <Navigate to="/my-story" replace /> },
      { path: "achievements", element: <Navigate to="/my-story" replace /> },
      { path: "kuk-clean", element: <KukCleanPage /> },
      { path: "notpaused", element: <NotPausedPage /> },
      { path: "influencer", element: <InfluencerPage /> },
    ]
  },
], {
  basename: "/portfolio/"
});

export default router;
