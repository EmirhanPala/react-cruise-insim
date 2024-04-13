import { Packages } from "./pages";
// import { AuthGuard } from "./pages/auth";
import { Dashboard } from "./pages/base/Dashboard";
import { PacketHooksExample } from "./pages/PacketHooksExample";
import { PlayersAndConnectionsExample } from "./pages/PlayersAndConnectionsExample";

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