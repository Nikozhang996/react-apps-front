/*
* https://segmentfault.com/a/1190000020812860
* */

import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Music from "../modules/Music";
import { Loading, LifeCycle, Lazy } from "../modules/Demo";
const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/music" component={Music} />
        <Route path="/demo">
          <Switch>
            <Route exact={true} path="/demo/lazy" component={Lazy} />
            <Route exact={true} path="/demo/loading" component={Loading} />
            <Route exact={true} path="/demo/life-cycle" component={LifeCycle} />
            <Redirect to="/demo/loading" />
          </Switch>
        </Route>
        <Redirect to="/music" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
