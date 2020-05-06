import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/pages/_layouts/default';
import AppLayout from '~/pages/_layouts/app';
import useAuth from '~/hooks/useAuth';

export default function AppRoute({ component: Component, isPrivate, ...rest }) {
  const { isSigned } = useAuth();

  const Layout = isSigned ? AppLayout : DefaultLayout;

  if (isPrivate && !isSigned) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

AppRoute.defaultProps = {
  isPrivate: false,
};

AppRoute.propTypes = {
  component: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool,
};
