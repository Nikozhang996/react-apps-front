import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Lazy from "../modules/Demo/Lazy";
import Music from "../modules/Music";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/music" component={Music} />
        <Route path="demo">
          <Route exact={true} path="/lazy" component={Lazy} />
          <Redirect to="/lazy" />
        </Route>
        <Redirect to="/music" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
