import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '~/pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
