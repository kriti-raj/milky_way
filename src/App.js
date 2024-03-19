import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Months from "./components/Months";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/month",
      element: <Months />,
    },
  ]);

  return <RouterProvider router={router} />;
}
