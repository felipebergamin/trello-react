import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyles from './global/styles';
import store from '~/store';
import { AuthProvider } from '~/contexts/auth';
import '~/services/firebase';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </Provider>
  );
}

export default App;
