import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // You can add all your routes here
      // { path: "about", element: <About /> },
    ]
  },
], {
  basename: "/portfolio/"
});

export default router;
