import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import { Form, Home } from "../pages";

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Form} path="/form" />
      </Switch>
    </HashRouter>
  );
};
