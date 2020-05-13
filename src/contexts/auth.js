import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

export const AuthContext = React.createContext({});
AuthContext.displayName = 'AuthContext';

export function AuthProvider({ children }) {
  const [isSigned, setSigned] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSigned(true);
      } else {
        setSigned(false);
      }
    });

    return () => unsubscribe();
  }, []);

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
