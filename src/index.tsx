import { InSimFlags } from 'node-insim/packets';
import { createRoot, type CreateRootOptions } from "react-node-insim";

import { App } from "./App";

const flags = InSimFlags.ISF_OBH | InSimFlags.ISF_MCI | InSimFlags.ISF_CON | InSimFlags.ISF_MSO_COLS | InSimFlags.ISF_NLP | InSimFlags.ISF_AXM_EDIT | InSimFlags.ISF_AXM_LOAD;
const rootOptions: CreateRootOptions = {
  name: "ReactInSim",
  host: "188.122.74.156",
  port: 56050,
  adminPassword: "lfsadmin",
  flags: flags,
  interval: 100,
  prefix: '!',
};

const server = createRoot(rootOptions);
server.render(<App />)

process.on('uncaughtException', (error) => {
  console.log(error.message);
});