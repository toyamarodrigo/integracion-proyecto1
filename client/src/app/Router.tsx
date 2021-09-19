import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Form, Home } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Form} path="/form" />
      </Switch>
    </BrowserRouter>
  );
};
