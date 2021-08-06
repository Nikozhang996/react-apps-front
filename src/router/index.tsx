import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Lazy from "../modules/Demo/Lazy";
import Music from "../modules/Music";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/music" component={Music} />
        <Route path="/demo">
          <Route path="lazy" component={Lazy} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
