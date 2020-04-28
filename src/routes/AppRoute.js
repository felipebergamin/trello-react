import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import Header from '~/components/header';

export default function AppRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Header />
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

AppRoute.propTypes = {
  component: PropTypes.node.isRequired,
};
