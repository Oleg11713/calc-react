import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../header";
import { ROUTES } from "../../constants/routes";

import { AppContainer } from "./styled";

const App = () => {
  const theme = useSelector((state) => state.app.theme);

  return (
    <AppContainer theme={theme}>
      <Header />
      <Routes>
        {ROUTES.map((route) => {
          return (
            <Route
              key={route.title}
              path={route.path}
              element={route.element}
            />
          );
        })}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
