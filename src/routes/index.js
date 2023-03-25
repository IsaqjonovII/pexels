import Home from "./Home";
import Profile from "./Profile";

const routes = [
  {
    id: 0,
    link: "/",
    component: <Home />,
  },
  {
    id: 1,
    link: "/profile",
    component: <Profile />,
  },
];
export default routes;