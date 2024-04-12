import { InSimFlags } from 'node-insim/packets';
import React, { StrictMode } from 'react';
import type { CreateRootOptions } from "react-node-insim";
import {
  ConnectionsProvider,
  createRoot,
  PlayersProvider,
} from "react-node-insim";
import { Provider } from 'react-redux';

import { App } from "./App";
import store from './store';

const rootOptions: CreateRootOptions = {
  name: "React InSim",
  host: "185.123.101.78",
  port: 58505,
  adminPassword: "lfsadmin",
  flags: InSimFlags.ISF_OBH | InSimFlags.ISF_HLV | InSimFlags.ISF_MCI,
  interval: 100,
  prefix: '!',
};

createRoot(rootOptions).render(
  <StrictMode>
    <Provider store={store}>
      <PlayersProvider>
        <ConnectionsProvider>
          <App />
        </ConnectionsProvider>
      </PlayersProvider>
    </Provider>
  </StrictMode>
);

process.on('uncaughtException', (error) => {
  console.log(error.message);
});