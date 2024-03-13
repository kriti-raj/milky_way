import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import January from "./components/months/January";
import February from "./components/months/February";
import March from "./components/months/March";
import April from "./components/months/April";
import May from "./components/months/May";
import June from "./components/months/June";
import July from "./components/months/July";
import August from "./components/months/August";
import September from "./components/months/September";
import October from "./components/months/October";
import November from "./components/months/November";
import December from "./components/months/December";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/jan",
      element: <January />,
    },
    {
      path: "/feb",
      element: <February />,
    },
    {
      path: "/mar",
      element: <March />,
    },
    {
      path: "/apr",
      element: <April />,
    },
    {
      path: "/may",
      element: <May />,
    },
    {
      path: "/june",
      element: <June />,
    },
    {
      path: "/july",
      element: <July />,
    },
    {
      path: "/aug",
      element: <August />,
    },
    {
      path: "/sep",
      element: <September />,
    },
    {
      path: "/oct",
      element: <October />,
    },
    {
      path: "/nov",
      element: <November />,
    },
    {
      path: "/dec",
      element: <December />,
    },
  ]);

  return <RouterProvider router={router} />;
}
