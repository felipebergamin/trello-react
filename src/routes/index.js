import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import AppRoute from './AppRoute';
import Login from '~/pages/Login';
import Boards from '~/pages/Boards';
import SignUp from '~/pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <AppRoute path="/login" component={Login} exact />
        <AppRoute path="/signup" component={SignUp} exact />
        <AppRoute path="/boards" component={Boards} exact isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
