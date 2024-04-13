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

const flags = InSimFlags.ISF_OBH | InSimFlags.ISF_HLV | InSimFlags.ISF_MCI | InSimFlags.ISF_CON | InSimFlags.ISF_MSO_COLS | InSimFlags.ISF_NLP;

const rootOptions: CreateRootOptions = {
  name: "ReactInSim",
  host: "185.123.101.78",
  port: 55052,
  adminPassword: "lfsadmin",
  flags: flags,
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