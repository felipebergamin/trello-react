import React from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});
AuthContext.displayName = 'AuthContext';

export function AuthProvider({ children }) {
  const [isSigned, setSigned] = React.useState(false);

  const signIn = () => {
    setSigned(true);
  };

  const signOut = () => {
    setSigned(false);
  };

  return (
    <AuthContext.Provider value={{ isSigned, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
