import React from 'react';

import Routes from './routes';
import GlobalStyles from './global/styles';

import { AuthProvider } from '~/contexts/auth';
import '~/services/firebase';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
