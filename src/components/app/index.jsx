import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../header";
import { ROUTES } from "../../constants/routes";
import { setHistory } from "../../store/reducers/calculatorReducer";
import { setTheme } from "../../store/reducers/appReducer";

import { AppContainer } from "./styled";

const App = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const localHistory = JSON.parse(localStorage.getItem("history"));
    localHistory.forEach((local) => dispatch(setHistory(local)));
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    dispatch(setTheme(localTheme));
  }, [dispatch]);

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
        <Route path="*" element={<Navigate to="/homeFC" />} />
      </Routes>
    </AppContainer>
  );
};

export default App;
