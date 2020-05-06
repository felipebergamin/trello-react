import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import AppLayout from '~/pages/_layouts/app';
import useAuth from '~/hooks/useAuth';

export default function AppRoute({ component: Component, isPrivate, ...rest }) {
  const { isSigned } = useAuth();

  const Layout = isSigned ? AppLayout : AuthLayout;

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
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  isPrivate: PropTypes.bool,
};
