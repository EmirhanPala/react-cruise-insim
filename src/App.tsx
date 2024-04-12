import { PlayersAndConnectionsExample } from "./pages/PlayersAndConnectionsExample";
import { PacketHooksExample } from "./pages/PacketHooksExample";
import { AuthGuard } from "./pages/auth";
import { Packages } from "./pages";
import { Dashboard } from "./pages/base/Dashboard";

export const App = () => {
  return (
    <>
      {/* <AuthGuard> */}
      <>
        <PacketHooksExample />
        <PlayersAndConnectionsExample />
        <Dashboard />
        <Packages />
      </>
      {/* </AuthGuard> */}
    </>
  );
};