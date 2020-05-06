import React from 'react';
import PropTypes from 'prop-types';

const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{ isSigned: false }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
