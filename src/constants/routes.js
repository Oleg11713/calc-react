import HomePage from "../pages/home";
import SettingsPage from "../pages/settings";

export const ROUTES = [
  {
    path: "/home",
    element: <HomePage />,
    title: "Home",
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    title: "Settings",
  },
];
