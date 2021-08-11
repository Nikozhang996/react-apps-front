/*
 * https://segmentfault.com/a/1190000020812860
 * */

import React, { FC } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Music from "../modules/Music";
import Login from "../modules/login";
import { Loading, LifeCycle, Lazy, PureComponentTest } from "../modules/Demo";
const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/music" component={Music} />
        <Route exact={true} path="/login" component={Login} />
        <Route path="/demo">
          <Switch>
            <Route exact={true} path="/demo/lazy" component={Lazy} />
            <Route exact={true} path="/demo/loading" component={Loading} />
            <Route exact={true} path="/demo/life-cycle" component={LifeCycle} />
            <Route exact={true} path="/demo/pure-component" component={PureComponentTest} />
            <Redirect to="/demo/loading" />
          </Switch>
        </Route>
        <Redirect to="/music" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
