import { InSimFlags } from 'node-insim/packets';
import { createRoot } from 'react-node-insim';
import { App } from "./App";

const root = createRoot({
  name: 'React InSim',
  host: '127.0.0.1',
  port: 29999,
  adminPassword: '',
  flags: InSimFlags.ISF_LOCAL,
});

root.render(<App />);