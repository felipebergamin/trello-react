import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AppRoute from './AppRoute';
import Login from '~/pages/Login';
import Boards from '~/pages/Boards';
import SignUp from '~/pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <AppRoute path="/boards" component={Boards} exact isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
