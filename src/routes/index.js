import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '~/pages/Login';
import Boards from '~/pages/Boards';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} exact />
        <Route path="/boards" component={Boards} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
