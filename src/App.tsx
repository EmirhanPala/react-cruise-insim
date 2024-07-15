import React, { StrictMode } from 'react';
import {
  ConnectionsProvider,
  PlayersProvider,
} from "react-node-insim";
import { Provider } from 'react-redux';

import { Packages } from "./pages";
// import { AuthGuard } from "./pages/auth";
import { Dashboard } from "./pages/base/Dashboard";
import store from './store';

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <ConnectionsProvider>
          <PlayersProvider>
            {/* <AuthGuard> */}
            <Dashboard />
            <Packages />
            {/* </AuthGuard> */}
          </PlayersProvider>
        </ConnectionsProvider>
      </Provider>
    </StrictMode>
  );
};