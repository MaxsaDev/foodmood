import React from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes/routes";
import {HOME_ROUTE} from "../routes/const";
import Home from "../page/Home";

export const AppRoutes = ({isAuth}) => {
  console.log('isAuth', isAuth);
  return (
    <Routes>

      {isAuth && authRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={Component} exact/>
      )}

      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={Component} exact/>
      )}

      <Route path={HOME_ROUTE} element={Home} exact/>

    </Routes>
  );
};
