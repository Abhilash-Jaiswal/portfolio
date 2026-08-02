import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MyStoryPage } from "./pages/MyStoryPage.jsx";
import { MyVenturesPage } from "./pages/MyVenturesPage.jsx";
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
      { path: "my-ventures", element: <MyVenturesPage /> },
      { path: "kuk-clean", element: <Navigate to="/my-ventures?tab=kuk-clean" replace /> },
      { path: "notpaused", element: <Navigate to="/my-ventures?tab=notpaused" replace /> },
      { path: "influencer", element: <InfluencerPage /> },
    ]
  },
], {
  basename: "/portfolio/"
});

export default router;
