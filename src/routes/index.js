import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "../pages/login";
import Timeline from "../pages/timeline";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/timeline" component={Timeline} />
  </Switch>
);

export default Routes;
