import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LifeStoryPage } from "./pages/LifeStoryPage.jsx";
import { AchievementsPage } from "./pages/AchievementsPage.jsx";
import { KukCleanPage } from "./pages/KukCleanPage.jsx";
import { NotPausedPage } from "./pages/NotPausedPage.jsx";
import { InfluencerPage } from "./pages/InfluencerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "life-story", element: <LifeStoryPage /> },
      { path: "achievements", element: <AchievementsPage /> },
      { path: "kuk-clean", element: <KukCleanPage /> },
      { path: "notpaused", element: <NotPausedPage /> },
      { path: "influencer", element: <InfluencerPage /> },
    ]
  },
], {
  basename: "/portfolio/"
});

export default router;
