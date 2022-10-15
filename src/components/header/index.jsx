import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

import { ActiveTab, HeaderContainer, LogoTitle, Tab, Tabs } from "./styled";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    ROUTES.forEach((route) => {
      if (route.path === location.pathname) setActiveLink(route.title);
    });
  });

  return (
    <HeaderContainer>
      <Link to="/homeFC">
        <LogoTitle>Calculator App</LogoTitle>
      </Link>
      <Tabs>
        {ROUTES.map((route) => {
          return (
            <Link key={route.title} to={route.path}>
              {activeLink === route.title ? (
                <ActiveTab>{route.title}</ActiveTab>
              ) : (
                <Tab>{route.title}</Tab>
              )}
            </Link>
          );
        })}
      </Tabs>
    </HeaderContainer>
  );
};

export default Header;
