import { createBrowserRouter } from "react-router-dom";
import Username from "../components/Username";
import Password from "../components/Password";
import Profile from "../components/Profile";
import Recovery from "../components/Recovery";
import Register from "../components/Register";
import Reset from "../components/Reset";
import PageNotFound from "../components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
]);

export default router;
