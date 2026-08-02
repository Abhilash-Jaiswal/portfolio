import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { MyStoryPage } from "./pages/MyStoryPage.jsx";
import { WorkWithMePage } from "./pages/WorkWithMePage.jsx";
import { MyVenturesPage } from "./pages/MyVenturesPage.jsx";
import { PressPage } from "./pages/PressPage.jsx";
import { LatestPage } from "./pages/LatestPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "life-story", element: <MyStoryPage /> },
      { path: "my-story", element: <Navigate to="/life-story" replace /> },
      { path: "work-with-me", element: <WorkWithMePage /> },
      { path: "my-ventures", element: <MyVenturesPage /> },
      { path: "kuk-clean", element: <Navigate to="/my-ventures?tab=kuk-clean" replace /> },
      { path: "notpaused", element: <Navigate to="/my-ventures?tab=notpaused" replace /> },
      { path: "press", element: <PressPage /> },
      { path: "achievements", element: <Navigate to="/press" replace /> },
      { path: "latest", element: <LatestPage /> },
      { path: "contact", element: <ContactPage /> },
    ]
  },
], {
  basename: "/portfolio/"
});

export default router;
