import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "../header";
import { ROUTES } from "../../constants/routes";

import { AppContainer } from "./styled";

const App = () => {
  return (
    <AppContainer>
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
