import HomePageFC from "../pages/homeFC";
import HomePageCC from "../pages/homeCC";
import SettingsPage from "../pages/settings";

export const ROUTES = [
  {
    path: "/homeFC",
    element: <HomePageFC />,
    title: "HomeFC",
  },
  {
    path: "/homeCC",
    element: <HomePageCC />,
    title: "HomeCC",
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    title: "Settings",
  },
];
