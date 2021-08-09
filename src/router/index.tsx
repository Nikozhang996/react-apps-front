import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Music from "../modules/Music";
import Lazy from "../modules/Demo/Lazy";
import Loading from "../modules/Demo/loading";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/music" component={Music} />
        <Route path="/demo">
          <Switch>
            <Route exact={true} path="/demo/lazy" component={Lazy} />
            <Route exact={true} path="/demo/loading" component={Loading} />
            <Redirect to="/demo/loading" />
          </Switch>
        </Route>
        <Redirect to="/music" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
